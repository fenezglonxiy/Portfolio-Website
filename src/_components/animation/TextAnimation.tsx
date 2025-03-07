"use client";

import React from "react";
import { styled } from "@mui/material";
import clsx from "clsx";

import textAnimationClasses from "./textAnimationClasses";

type TextAnimationRootProps = React.ComponentPropsWithoutRef<"div">;

const StyledTextAnimationRoot = styled("div", {
  name: "TextAnimation",
  slot: "Root",
})<TextAnimationRootProps>({});

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

const StyledTextAnimationContent = styled("div", {
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

export const TextAnimationContent = React.forwardRef(
  function TextAnimationContent(
    props: TextAnimationContentProps,
    ref: React.Ref<HTMLDivElement>
  ) {
    const { className, ...rest } = props;

    return (
      <StyledTextAnimationContent
        ref={ref}
        className={clsx(textAnimationClasses.content, className)}
        {...rest}
      />
    );
  }
);

export const defaultDuration = 0.75;

export const defaultDelay = 0.1;

export const defaultStagger = 0;

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
