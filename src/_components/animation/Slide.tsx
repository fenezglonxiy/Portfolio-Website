import React from "react";
import { styled } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";

import mergeRefs from "@/_utils/mergeRefs";

import slideClasses from "./slideClasses";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type SlideRootProps = React.ComponentPropsWithoutRef<"div">;

const SlideRoot = styled("div", {
  name: "PwSlideAnimation",
  slot: "Root",
})<SlideRootProps>({});

type SlideContentProps = React.ComponentPropsWithoutRef<"div">;

const SlideContent = styled("div", {
  name: "PwSlideAnimation",
  slot: "Content",
})<SlideContentProps>({});

function getTranslateValue(
  direction: Props["direction"],
  contentRef: React.RefObject<HTMLDivElement>,
  container: Props["container"]
) {
  if (!contentRef || !contentRef.current) {
    return undefined;
  }

  const content = contentRef.current;
  const rect = content.getBoundingClientRect();
  const resolvedContainer = resolveContainer(container);
  const containerRect = resolvedContainer?.getBoundingClientRect();

  const child = content.children[0];
  const computedStyle = window.getComputedStyle(child);
  let offsetX = 0;
  let offsetY = 0;
  const transform =
    computedStyle.getPropertyValue("-webkit-transform") ||
    computedStyle.getPropertyValue("transform");

  if (!transform) {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === "left") {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }

    return `translateX(${window.innerWidth + offsetX - rect.left}px)`;
  }

  if (direction === "right") {
    if (containerRect) {
      return `translateX(-${rect.right - offsetX - containerRect.left}px)`;
    }

    return `translateX(-${rect.right - offsetX}px)`;
  }

  if (direction === "up") {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }

    return `translateY(${window.innerHeight + offsetY - rect.top}px)`;
  }

  if (containerRect) {
    return `translateY(-${rect.bottom - offsetY - containerRect.top}px)`;
  }

  return `translateY(-${rect.bottom - offsetY}px)`;
}

function resolveContainer(containerFromProps: Props["container"]) {
  return typeof containerFromProps === "function"
    ? containerFromProps()
    : containerFromProps;
}

type Props = Omit<SlideRootProps, "children"> & {
  /**
   * Direction the child node will enter from.
   *
   * @default "down"
   */
  direction?: "down" | "left" | "right" | "up";

  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is animating from.
   */
  container?: null | Element | (() => Element);

  /**
   * The duration of the animation in seconds.
   */
  duration?: number;

  /**
   * The length of time in seconds before the animation should begin.
   */
  delay?: number;

  /**
   * A single child content element.
   */
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  children: React.ReactElement<unknown, any>;
};

const Slide = React.forwardRef(function Slide(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    direction = "down",
    container,
    duration: durationFromProps,
    delay: delayFromProps,
    className,
    children,
    ...rest
  } = props;
  const duration = durationFromProps ?? 0.8;
  const delay = delayFromProps ?? 0.1;
  const rootRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef || !contentRef.current) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: `.${slideClasses.content}`,
        delay,
      });

      timeline.from(`.${slideClasses.content}`, {
        opacity: 0,
        transform: getTranslateValue(direction, contentRef, container),
        duration,
        ease: "circ.out",
      });

      return () => {
        timeline.kill();
      };
    },
    { scope: rootRef }
  );

  return (
    <SlideRoot
      ref={mergeRefs(ref, rootRef)}
      className={clsx(slideClasses.root, className)}
      {...rest}
    >
      <SlideContent ref={contentRef} className={slideClasses.content}>
        {children}
      </SlideContent>
    </SlideRoot>
  );
});

Slide.displayName = "SlideAnimation";

export default Slide;
