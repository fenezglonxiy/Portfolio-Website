"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollTrigger } from "gsap/all";
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
CustomEase.create("quart.out", "0.25, 1, 0.5, 1");

type Props = TextAnimationProps;

const WordsAnimation = React.forwardRef(function WordsAnimation(
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
        lineClass: textAnimationClasses.lineBox,
      });

      const timeline = gsap.timeline({
        scrollTrigger: `.${textAnimationClasses.content}`,
        delay,
        onComplete: () => {
          splitType.revert();
        },
      });

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
          ease: "quart.out",
          stagger: stagger || 0.05,
        },
        0
      );

      return () => {
        timeline.kill();
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

WordsAnimation.displayName = "WordsAnimation";

export default WordsAnimation;
