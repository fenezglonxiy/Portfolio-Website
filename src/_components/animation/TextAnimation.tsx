"use client";

import React from "react";
import { styled } from "@mui/material";
import clsx from "clsx";
import SplitType, { SplitTypeOptions, TargetElement } from "split-type";
import _ from "lodash";

import textAnimationClasses from "./textAnimationClasses";

/**
 * Split `#text` content into lines, words or chars using split-type package.
 * (https://www.npmjs.com/package/split-type)
 *
 * @param target The element contains the `#text` content.
 * @param options The splitting options (https://www.npmjs.com/package/split-type#api-reference)
 * @param containerElement The element contains the `target` element. This element will be observed by an `ResizeObserver` to ensure that the text will reflow naturally if the viewport is resized when the text is split into lines or when the absolute position of lines, words or chars is enabled.
 * @param debounceCallback Callback fired once after the resize is complete.
 * @param debounceWait The length of time in milliseconds before the `debounceCallback` should be fired.
 * @param debounceOptions The debounce options object.
 * @param debounceOptions.leading Specify invoking on the leading edge of the timeout.
 * @param debounceOptions.maxWait The maximum time func is allowed to be delayed before it’s invoked.
 * @param debounceOptions.trailing Specify invoking on the trailing edge of the timeout.
 * @returns
 */
export function splitText(
  target: TargetElement,
  options: Partial<SplitTypeOptions>,
  containerElement?: Element,
  debounceCallback?: (splitType: SplitType, entry: any) => void,
  debounceWait?: number,
  debounceOptions?: _.DebounceSettingsLeading
) {
  const splitType = new SplitType(target, options);
  const isSplitIntoLines =
    splitType.lines !== null && splitType.lines.length > 0;
  const isAbsolutePositionEnabled = options.absolute;

  if ((isSplitIntoLines || isAbsolutePositionEnabled) && containerElement) {
    const resizeObserver = new ResizeObserver(
      _.debounce(
        ([entry]) => {
          if (debounceCallback) {
            debounceCallback(splitType, entry);
          }
        },
        debounceWait,
        debounceOptions
      )
    );

    resizeObserver.observe(containerElement);
  }

  return splitType;
}

export type TextAnimationRootProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * The `className` of the children box contains the `#text` node to which the
   * animation is applied.
   *
   * If there are multiple children box with the same `className`, the
   * animation will only be applied to the first children box.
   */
  textBoxClassName: string;
};

const StyledTextAnimationRoot = styled("div", {
  name: "TextAnimation",
  slot: "Root",
  shouldForwardProp: (prop) => prop !== "textBoxClassName",
})<TextAnimationRootProps>((props) => ({
  [`& .${props.textBoxClassName}`]: {
    fontKerning: "none",
  },
}));

export const TextAnimationRoot = React.forwardRef(function TextAnimationRoot(
  props: TextAnimationRootProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, ...rest } = props;

  return (
    <StyledTextAnimationRoot
      ref={ref}
      className={clsx(textAnimationClasses.root, className)}
      {...rest}
    />
  );
});

export const defaultDuration = 0.75;

export const defaultDelay = 0.1;

export const defaultStagger = 0;

export type TextAnimationProps = Omit<TextAnimationRootProps, "children"> & {
  /**
   * The `className` of the children box contains the `#text` node to which the
   * animation is applied.
   *
   * If there are multiple children box with the same `className`, the
   * animation will only be applied to the first children box.
   */
  textBoxClassName: string;

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

  /**
   * A single child content element.
   */
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  children: React.ReactElement<unknown, any>;
};
