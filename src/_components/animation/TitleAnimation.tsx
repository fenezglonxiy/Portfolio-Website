"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import SplitType from "split-type";

import mergeRefs from "@/_utils/mergeRefs";

import {
  defaultDelay,
  defaultDuration,
  defaultStagger,
  TextAnimationContent,
  TextAnimationProps,
  TextAnimationRoot,
} from "./TextAnimation";
import textAnimationClasses from "./textAnimationClasses";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create("quart.easeOut", "0.25, 1, 0.5, 1");
CustomEase.create("quad.easeOut", "0.5, 1, 0.89, 1");

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
    className,
    children,
    ...rest
  } = props;
  const duration = durationFromProps ?? defaultDuration;
  const delay = delayFromProps ?? defaultDelay;
  const stagger = staggerFromProps ?? defaultStagger;

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

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: rootRef }
  );

  return (
    <TextAnimationRoot ref={mergeRefs(ref, rootRef)} {...rest}>
      <TextAnimationContent
        ref={contentRef}
        textBoxClassName={textBoxClassName}
      >
        {children}
      </TextAnimationContent>
    </TextAnimationRoot>
  );
});

TitleAnimation.displayName = "TitleAnimation";

export default TitleAnimation;
