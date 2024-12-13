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

type WorkCard = {
  /**
   * Control the card thumbnail.
   */
  thumbnailSrc: string;

  /**
   * The work title.
   */
  workTitle: string;

  /**
   * The business sector that the work revolves to.
   */
  workBusinessSector: string;

  /**
   * The date when the work begins.
   */
  workStartDate: moment.Moment;

  /**
   * The work duration.
   */
  workDuration: moment.Duration;

  /**
   * A summary of what you have achieved during the work.
   */
  workSummary: string;
};
