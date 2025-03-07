"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { styled } from "@mui/material";
import clsx from "clsx";

import mergeRefs from "@/_utils/mergeRefs";

import textAnimationClasses from "./textAnimationClasses";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create("quart.easeOut", "0.25, 1, 0.5, 1");
CustomEase.create("quad.easeOut", "0.5, 1, 0.89, 1");

type TextAnimationRootProps = React.ComponentPropsWithoutRef<"div">;

const TextAnimationRoot = styled("div", {
  name: "TextAnimation",
  slot: "Root",
})({});

type TextAnimationContentProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * The `className` of the children box contains the `#text` node to which the
   * animation is applied.
   *
   * If there are multiple children box with the same `className`, the
   * animation will only be applied to the first children box.
   */
  textBoxClassName: string;
};

const TextAnimationContent = styled("div", {
  name: "TextAnimation",
  slot: "Content",
  shouldForwardProp: (prop) => prop !== "textBoxClassName",
})<TextAnimationContentProps>((props) => ({
  [`&,
    & .${textAnimationClasses.lineBox}, 
    & .${textAnimationClasses.line}, 
    & .${textAnimationClasses.word}, 
    & .${textAnimationClasses.char}`]: {
    overflow: "hidden",
  },

  [`& .${props.textBoxClassName}`]: {
    fontKerning: "none",
  },
}));

export type TextAnimationProps = TextAnimationRootProps & {
  /**
   * The `className` of the children box contains the `#text` node to which the
   * animation is applied.
   *
   * If there are multiple children box with the same `className`, the
   * animation will only be applied to the first children box.
   */
  textBoxClassName: string;

  /**
   * The animation type.
   */
  type: "chars" | "words" | "lines" | "title";

  /**
   * The duration of the animation in seconds.
   */
  duration?: number;

  /**
   * The length of time in seconds before the animation should begin.
   */
  delay?: number;

  /**
   * The length of time in seconds before the animation of each tween should
   * begin.
   */
  stagger?: number;
};

const TextAnimation = React.forwardRef(function TextAnimation(
  props: TextAnimationProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    textBoxClassName,
    type,
    duration: durationFromProps,
    delay: delayFromProps,
    stagger: staggerFromProps,
    className,
    children,
    ...rest
  } = props;
  const duration = durationFromProps ?? 0.75;
  const delay = delayFromProps ?? 0.1;
  const stagger = staggerFromProps ?? 0;

  const rootRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef || !contentRef.current) {
        return;
      }

      const firstElementByClassName =
        contentRef.current.getElementsByClassName(textBoxClassName)[0];

      if (firstElementByClassName === undefined) {
        return;
      }

      const textBoxElement = firstElementByClassName as HTMLElement;

      switch (type) {
        case "title": {
          const splitType = new SplitType(textBoxElement, {
            types: "lines,words",
            lineClass: textAnimationClasses.line,
            wordClass: textAnimationClasses.word,
          });

          gsap.set(textBoxElement.firstChild, { perspective: "1000px" });
          gsap.set(textBoxElement.children, { transformStyle: "preserve-3d" });

          const timeline = gsap.timeline({
            scrollTrigger: `.${textAnimationClasses.content}`,
            delay,
            onComplete: () => {
              splitType.revert();
            },
          });

          const lines = splitType.lines;

          if (lines === null) {
            return;
          }

          lines.forEach((line, idx) => {
            gsap.set(line, { transformOrigin: "50% 0" });

            const position = idx / (stagger || 6);

            timeline.fromTo(
              line.getElementsByClassName(textAnimationClasses.word),
              { y: "100%" },
              {
                y: 0,
                duration,
                ease: "quart.easeOut",
              }
            );

            timeline.fromTo(
              line,
              {
                rotateX: "-35deg",
                rotateY: "-5deg",
                z: "-1rem",
              },
              {
                rotateX: "0deg",
                rotateY: "0deg",
                z: "0rem",
                duration,
                ease: "quad.easeOut",
              },
              position
            );
          });
          break;
        }
        default: {
          showSplitText(type);
          break;
        }
      }

      function showSplitText(type: "chars" | "words" | "lines") {
        const splitType = new SplitType(textBoxElement, {
          lineClass: textAnimationClasses.lineBox,
        });

        const timeline = gsap.timeline({
          scrollTrigger: `.${textAnimationClasses.content}`,
          delay,
          onComplete: () => {},
        });

        switch (type) {
          case "lines": {
            const lineBoxes = splitType.lines;
            lineBoxes?.forEach((lineBox, idx) => {
              const linesSplitType = new SplitType(lineBox, {
                types: "lines",
                lineClass: textAnimationClasses.line,
              });

              if (linesSplitType.lines === null) {
                return;
              }

              const line = linesSplitType.lines[0];

              timeline.from(
                line,
                {
                  opacity: 0,
                  y: "101%",
                  duration,
                  ease: "quart.easeOut",
                },
                idx / (stagger || 15)
              );
            });
            break;
          }
          default: {
            const chars = splitType.chars;

            if (chars === null) {
              return;
            }

            timeline.from(
              chars,
              {
                opacity: 0,
                y: "101%",
                duration,
                ease: "quart.easeOut",
                stagger: stagger || (type === "words" ? 0.05 : 0.15),
              },
              0
            );
            break;
          }
        }
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: rootRef }
  );

  return (
    <TextAnimationRoot
      ref={mergeRefs(ref, rootRef)}
      className={clsx(textAnimationClasses.root, className)}
      {...rest}
    >
      <TextAnimationContent
        ref={contentRef}
        className={clsx(textAnimationClasses.content, className)}
        textBoxClassName={textBoxClassName}
      >
        {children}
      </TextAnimationContent>
    </TextAnimationRoot>
  );
});

TextAnimation.displayName = "TextAnimation";

export default TextAnimation;
