import { ThemeOptions } from "@mui/material/styles";
import { Url } from "next/dist/shared/lib/router/router";

type NavItem = {
  /**
   * Control the URL or path to navigate to.
   */
  href: string;

  /**
   * Control the link label.
   */
  label: string;
};

type Achievement = {
  /**
   * A URL or path to navigate to the svg icon or the svg image of the
   * achievement.
   */
  svgHref: string;

  /**
   * The svg width.
   */
  svgWidth: number | string;

  /**
   * The svg height.
   */
  svgHeight: number | string;

  /**
   * Control the title of the achievement.
   */
  title: string;

  /**
   * The date when the achievement title is first achieved.
   */
  date: moment.Moment;

  /**
   * The period that the achievement title is achieved.
   */
  duration?: moment.Duration;

  /**
   * A URL or path to navigate to the achievement.
   */
  referenceHref?: string;
};

type Shape = keyof NonNullable<ThemeOptions["shape"]>;

type BorderRadius =
  | keyof Omit<NonNullable<ThemeOptions["shape"]>, "pill" | "circle">
  | "match-parent"
  | "inherit";
