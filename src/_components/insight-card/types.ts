import { Url } from "next/dist/shared/lib/router/router";

export type InsightCardVariant = "home" | "sub" | "base" | "main";

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
