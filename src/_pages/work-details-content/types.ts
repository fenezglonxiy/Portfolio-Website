import moment from "moment";

export type WorkDetails = {
  /**
   * The date when the work begins.
   */
  startDate: moment.Moment;

  /**
   * The work duration.
   */
  duration: moment.Duration;

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
  workResults: string;
};
