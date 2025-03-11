"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollTrigger } from "gsap/all";
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

type CharsAnimationRootProps = TextAnimationRootProps;

const CharsAnimationRoot = styled(TextAnimationRoot, {
  name: "PwCharsAnimation",
  slot: "Root",
})<CharsAnimationRootProps>({
  [`& .${textAnimationClasses.line}`]: {
    overflowY: "hidden",
  },
});

type Props = TextAnimationProps;

const CharsAnimation = React.forwardRef(function CharsAnimation(
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
          lineClass: textAnimationClasses.line,
        },
        rootRef.current,
        (splitType) => {
          if (isTimelineCompletedRef.current) {
            return;
          }

          timeline.clear();

          splitType.split({
            lineClass: textAnimationClasses.line,
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
              stagger: stagger || 0.15,
            },
            0
          );

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
    <CharsAnimationRoot
      ref={mergeRefs(ref, rootRef)}
      textBoxClassName={textBoxClassName}
      {...rest}
    >
      {children}
    </CharsAnimationRoot>
  );
});

CharsAnimation.displayName = "CharsAnimation";

export default CharsAnimation;
