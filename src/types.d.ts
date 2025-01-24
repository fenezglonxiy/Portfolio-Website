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

type Shape = keyof Pick<
  NonNullable<ThemeOptions["shape"]>,
  "none" | "xs" | "sm" | "md" | "lg" | "pill" | "circle"
>;

type BorderRadius =
  | keyof Omit<NonNullable<ThemeOptions["shape"]>, "pill" | "circle">
  | "match-parent"
  | "inherit";

export type InsightCardDetails = {
  /**
   * A URL or path to navigate to the insight details page.
   */
  href: Url;

  /**
   * A URL or path to navigate to the insight thumbnail.
   */
  thumbnailSrc: string;

  /**
   * The title of the insight.
   */
  title: string;

  /**
   * The summary of the insight.
   */
  summary: string;

  /**
   * The time needed to read the insight.
   */
  readTime: string;

  /**
   * The publish date of the insight.
   */
  publishDate: moment.Moment;

  /**
   * The subject that the insight discusses.
   */
  topic: string;

  /**
   * The labels that are attached to the insight.
   */
  tags: string[];
};
