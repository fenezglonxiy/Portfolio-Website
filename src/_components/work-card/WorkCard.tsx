import { Card, CardProps } from "@/_components/Card";
import { Button } from "@/_components/Button";

import WorkCardMedia from "./WorkCardMedia";
import WorkCardContent from "./WorkCardContent";
import WorkCardWorkOverview from "./WorkCardWorkOverview";
import WorkCardContentBox from "./WorkCardContentBox";
import WorkCardWorkTitle from "./WorkCardWorkTitle";
import WorkCardWorkTimestamps from "./WorkCardWorkTimestamps";
import WorkCardWorkSummary from "./WorkCardWorkSummary";
import WorkCardActions from "./WorkCardActions";
import WorkCardWorkBusinessSectors from "./WorkCardWorkBusinessSectors";

export type WorkCardDetails = {
  /**
   * Control the card thumbnail.
   */
  thumbnailSrc: string;

  /**
   * The work title.
   */
  workTitle: string;

  /**
   * The business sectors that the work relates to.
   */
  workBusinessSectors: string[];

  /**
   * The date when the work begins.
   */
  workStartDate: Date;

  /**
   * The date when the work ends.
   */
  workEndDate: Date;

  /**
   * A summary of what you have achieved during the work.
   */
  workSummary: string;

  /**
   * A URL or path to navigate to the details page of work.
   */
  workDetailsHref: string;

  /**
   * Restrict providing children.
   */
  children?: undefined | null;
};

export type WorkCardProps = CardProps & WorkCardDetails;

function WorkCard(props: WorkCardProps) {
  const {
    thumbnailSrc,
    workTitle,
    workBusinessSectors,
    workStartDate,
    workEndDate,
    workSummary,
    workDetailsHref,
    ...rest
  } = props;

  return (
    <Card {...rest}>
      <WorkCardMedia component="img" src={thumbnailSrc} />

      <WorkCardContent>
        <WorkCardWorkOverview>
          <WorkCardContentBox verticalSpacing={3}>
            <WorkCardWorkTitle>{workTitle}</WorkCardWorkTitle>

            <WorkCardContentBox verticalSpacing={2}>
              <WorkCardWorkBusinessSectors
                businessSectors={workBusinessSectors}
              />

              <WorkCardWorkTimestamps
                startDate={workStartDate}
                endDate={workEndDate}
              />
            </WorkCardContentBox>
          </WorkCardContentBox>

          <WorkCardWorkSummary>{workSummary}</WorkCardWorkSummary>
        </WorkCardWorkOverview>

        <WorkCardActions>
          <Button href={workDetailsHref} variant="contained" color="primary">
            View Details Work
          </Button>
        </WorkCardActions>
      </WorkCardContent>
    </Card>
  );
}

export default WorkCard;
