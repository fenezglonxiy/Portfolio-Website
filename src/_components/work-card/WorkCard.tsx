import { Card, CardProps } from "@/_components/Card";
import { Button } from "@/_components/Button";
import { WorkCardDetails } from "@/types";

import WorkCardMedia from "./WorkCardMedia";
import WorkCardContent from "./WorkCardContent";
import WorkCardWorkOverview from "./WorkCardWorkOverview";
import WorkCardContentBox from "./WorkCardContentBox";
import WorkCardWorkTitle from "./WorkCardWorkTitle";
import WorkCardWorkTimestamps from "./WorkCardWorkTimestamps";
import WorkCardWorkSummary from "./WorkCardWorkSummary";
import WorkCardActions from "./WorkCardActions";
import WorkCardWorkBusinessSectors from "./WorkCardWorkBusinessSectors";

export type WorkCardProps = Omit<CardProps, "children"> &
  Omit<WorkCardDetails, "workServices">;

function WorkCard(props: WorkCardProps) {
  const {
    mediaSrc,
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
      <WorkCardMedia component="img" src={mediaSrc} />

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
