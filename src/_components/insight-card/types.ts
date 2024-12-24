import { Url } from "next/dist/shared/lib/router/router";

export type InsightCardVariant = "sub" | "base" | "main";

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
   * The published date of the insight.
   */
  publishedDate: moment.Moment;
};
