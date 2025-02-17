"use client";
import React from "react";
import useTimeout from "@mui/utils/useTimeout";
import { duration, useForkRef, useTheme } from "@mui/material";
import getReactElementRef from "@mui/utils/getReactElementRef";

import Transition, {
  getTransitionAttribs,
  reflow,
  TransitionProps,
} from "./Transition";

type Props = TransitionProps;

const TranslateY = React.forwardRef(function TranslateY(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inFromProps,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = "auto",
    ...rest
  } = props;
  const timer = useTimeout();
  const autoTimeout = React.useRef<number | string>(0);
  const theme = useTheme();

  const nodeRef = React.useRef<HTMLElement | null>(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);

  const normalizedTransitionCallback =
    (callback: any) => (maybeIsAppearing?: boolean) => {
      if (callback) {
        const node = nodeRef.current;

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

  const handleEntering = normalizedTransitionCallback(onEntering);

  const handleEnter = normalizedTransitionCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      reflow(node);

      const {
        duration,
        delay,
        easing: transitionTimingFunction,
      } = getTransitionAttribs(
        {
          style,
          timeout:
            timeout === "auto"
              ? theme.transitions.getAutoHeightDuration(node.clientHeight)
              : timeout,
          easing,
        },
        { mode: "enter" }
      );

      if (timeout === "auto") {
        autoTimeout.current = duration;
      }

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    }
  );

  const handleEntered = normalizedTransitionCallback(onEntered);

  const handleExit = normalizedTransitionCallback((node: HTMLElement) => {
    if (onExit) {
      onExit(node);
    }
  });

  const handleExiting = normalizedTransitionCallback(onExiting);

  const handleExited = normalizedTransitionCallback(onExited);

  const handleAddEventListener = (next: () => void) => {
    if (timeout === "auto") {
      timer.start(Number(autoTimeout.current) || 0, next);
    }

    if (addEndListener && nodeRef && nodeRef.current) {
      addEndListener(nodeRef.current, next);
    }
  };

  return (
    <Transition
      appear={appear}
      in={inFromProps}
      nodeRef={nodeRef}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      addEndListener={handleAddEventListener}
      timeout={timeout === "auto" ? undefined : timeout}
      {...rest}
    >
      {(state, childProps) => <div {...childProps}></div>}
    </Transition>
  );
});

export default TranslateY;
