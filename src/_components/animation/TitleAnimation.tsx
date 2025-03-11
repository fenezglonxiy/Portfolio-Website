"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import { styled } from "@mui/material";

import mergeRefs from "@/_utils/mergeRefs";

import {
  defaultDelay,
  defaultDuration,
  defaultStagger,
  splitText,
  TextAnimationProps,
  TextAnimationRoot,
  TextAnimationRootProps,
} from "./TextAnimation";
import textAnimationClasses from "./textAnimationClasses";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create("quart.out", "0.25, 1, 0.5, 1");
CustomEase.create("quad.out", "0.5, 1, 0.89, 1");

type TitleAnimationRootProps = TextAnimationRootProps;

const TitleAnimationRoot = styled(TextAnimationRoot, {
  name: "PwTitleAnimation",
  slot: "Root",
})<TitleAnimationRootProps>({});

type Props = TextAnimationProps;

const TitleAnimation = React.forwardRef(function TitleAnimation(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    textBoxClassName,
    duration: durationFromProps,
    delay: delayFromProps,
    stagger: staggerFromProps,
    children,
    ...rest
  } = props;
  const duration = durationFromProps ?? defaultDuration;
  const delay = delayFromProps ?? defaultDelay;
  const stagger = staggerFromProps ?? defaultStagger;

  const rootRef = React.useRef<HTMLDivElement>(null);
  const isTimelineCompletedRef = React.useRef<boolean>(false);

  useGSAP(
    () => {
      if (!rootRef || !rootRef.current) {
        return;
      }

      const firstElementByClassName =
        rootRef.current.getElementsByClassName(textBoxClassName)[0];

      if (firstElementByClassName === undefined) {
        return;
      }

      const textBoxElement = firstElementByClassName as HTMLElement;

      const timeline = gsap.timeline({
        scrollTrigger: `.${textBoxClassName}`,
        delay,
      });

      splitText(
        textBoxElement,
        {
          types: "lines,words",
          lineClass: textAnimationClasses.line,
          wordClass: textAnimationClasses.word,
        },
        rootRef.current,
        (splitType) => {
          if (isTimelineCompletedRef.current) {
            return;
          }

          timeline.clear(true);

          splitType.split({
            types: "lines,words",
            lineClass: textAnimationClasses.line,
            wordClass: textAnimationClasses.word,
          });
          gsap.set(textBoxElement.firstChild, { perspective: "1000px" });
          gsap.set(textBoxElement.children, { transformStyle: "preserve-3d" });
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
                ease: "quart.out",
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
                ease: "quad.out",
              },
              position
            );
          });

          timeline.eventCallback("onComplete", () => {
            isTimelineCompletedRef.current = true;
            splitType.revert();
          });
        }
      );

      return () => {
        timeline.kill();
      };
    },
    { scope: rootRef }
  );

  return (
    <TitleAnimationRoot
      ref={mergeRefs(ref, rootRef)}
      textBoxClassName={textBoxClassName}
      {...rest}
    >
      {children}
    </TitleAnimationRoot>
  );
});

TitleAnimation.displayName = "TitleAnimation";

export default TitleAnimation;
