"use client";

import React from "react";

import mergeRefs from "@/_utils/mergeRefs";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollTrigger } from "gsap/all";

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

const LinesAnimation = React.forwardRef(function LinesAnimation(
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
        types: "lines",
        lineClass: textAnimationClasses.lineBox,
      });

      const timeline = gsap.timeline({
        scrollTrigger: `.${textAnimationClasses.content}`,
        delay,
        onComplete: () => {
          splitType.revert();
        },
      });

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

LinesAnimation.displayName = "LinesAnimation";

export default LinesAnimation;
