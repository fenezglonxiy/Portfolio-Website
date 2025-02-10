export type WorkDetails = {
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
};
