"use client";

import React from "react";

import mergeRefs from "@/_utils/mergeRefs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollTrigger } from "gsap/all";
import { styled } from "@mui/material";

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

type LinesAnimationRootProps = TextAnimationRootProps;

const LinesAnimationRoot = styled(TextAnimationRoot, {
  name: "PwLinesAnimation",
  slot: "Root",
})<LinesAnimationRootProps>({
  [`& .${textAnimationClasses.lineBox}`]: {
    overflowY: "hidden",
  },
});

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
          types: "lines",
          lineClass: textAnimationClasses.lineBox,
        },
        rootRef.current,
        (splitType) => {
          if (isTimelineCompletedRef.current) {
            return;
          }

          timeline.clear(true);

          splitType.split({
            types: "lines",
            lineClass: textAnimationClasses.lineBox,
          });
          const lineBoxes = splitType.lines;

          if (!lineBoxes) {
            return;
          }

          lineBoxes.forEach((lineBox, idx) => {
            const linesSplitType = splitText(lineBox, {
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
                ease: "quart.out",
              },
              idx / (stagger || 15)
            );
          });

          timeline.eventCallback("onComplete", () => {
            isTimelineCompletedRef.current = true;
            splitType.revert();
          });
        },
        500
      );

      return () => {
        timeline.kill();
      };
    },
    { scope: rootRef }
  );

  return (
    <LinesAnimationRoot
      ref={mergeRefs(ref, rootRef)}
      textBoxClassName={textBoxClassName}
      {...rest}
    >
      {children}
    </LinesAnimationRoot>
  );
});

LinesAnimation.displayName = "LinesAnimation";

export default LinesAnimation;
