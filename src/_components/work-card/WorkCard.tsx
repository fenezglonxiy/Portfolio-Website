import { Card, CardProps } from "@/_components/Card";
import WorkCardMedia from "./WorkCardMedia";
import WorkCardContent from "./WorkCardContent";
import WorkCardWorkOverview from "./WorkCardWorkOverview";
import WorkCardContentBox from "./WorkCardContentBox";
import WorkCardWorkTitle from "./WorkCardWorkTitle";
import WorkCardWorkBusinessSector from "./WorkCardWorkBusinessSector";
import WorkCardWorkTimestamps from "./WorkCardWorkTimestamps";
import WorkCardWorkSummary from "./WorkCardWorkSummary";
import WorkCardActions from "./WorkCardActions";
import { Button } from "../Button";

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
    workBusinessSector,
    workStartDate,
    workDuration,
    workSummary,
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
              <WorkCardWorkBusinessSector label={workBusinessSector} />

              <WorkCardWorkTimestamps
                startDate={workStartDate}
                duration={workDuration}
              />
            </WorkCardContentBox>
          </WorkCardContentBox>

          <WorkCardWorkSummary>{workSummary}</WorkCardWorkSummary>
        </WorkCardWorkOverview>

        <WorkCardActions>
          <Button>View Details Work</Button>
        </WorkCardActions>
      </WorkCardContent>
    </Card>
  );
}

export default WorkCard;
