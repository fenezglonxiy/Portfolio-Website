import { Url } from "next/dist/shared/lib/router/router";

export type WorkDetails = {
  /**
   * The number of participants who participate in the work.
   */
  teamSize: number;

  /**
   * The date when the work begins.
   */
  startDate: Date;

  /**
   * The date when the work ends.
   */
  endDate: Date;

  /**
   * The business sectors that the work relates to.
   */
  businessSectors: string[];

  /**
   * The services that the work provides.
   */
  services: string[];

  /**
   * Describe about the work.
   */
  about: string;

  /**
   * Describe about the challenge faced while performing the work.
   */
  challenge: string;

  /**
   * Describe the results achieved after the work duration.
   */
  results: string;

  /**
   * The link navigates to the git repository of the work.
   */
  git?: Url;

  /**
   * The link navigates to the demonstration of the work.
   */
  demo?: Url;

  /**
   * The link navigates to a deployment of the work.
   */
  deployment?: Url;
};
