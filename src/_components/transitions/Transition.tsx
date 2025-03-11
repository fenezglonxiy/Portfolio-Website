import { Transition as RTGTransition } from "react-transition-group";
import { TransitionProps as MUITransitionProps } from "@mui/material/transitions";

export type TransitionStatus =
  | "entering"
  | "entered"
  | "exiting"
  | "exited"
  | "unmounted";

interface ComponentProps {
  easing?: string | { enter?: string; exit?: string };
  style?: React.CSSProperties;
  timeout: number | { enter?: number; exit?: number };
}

interface Options {
  mode: "enter" | "exit";
}

interface TransitionAttribs {
  duration: string | number;
  easing?: string;
  delay?: string;
}

export function getTransitionAttribs(
  props: ComponentProps,
  options: Options
): TransitionAttribs {
  const { timeout, easing, style = {} } = props;

  return {
    duration:
      style.transitionDuration ??
      (typeof timeout === "number" ? timeout : timeout[options.mode] || 0),
    easing:
      style.transitionTimingFunction ??
      (typeof easing === "object" ? easing[options.mode] : easing),
    delay: style.transitionDelay,
  };
}

export type TransitionProps = MUITransitionProps & {
  children: React.ReactElement;
};

const Transition = RTGTransition;

export default Transition;
