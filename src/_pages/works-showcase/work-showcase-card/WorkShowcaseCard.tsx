/** @jsxImportSource @emotion/react */

"use client";

import { Card, CardProps } from "@/_components/Card";
import { WorkCardDetails } from "@/_components/work-card";
import { Button } from "@/_components/Button";

import WorkShowcaseCardMedia from "./WorkShowcaseCardMedia";
import WorkShowcaseCardContent from "./WorkShowcaseCardContent";
import WorkShowcaseCardActions from "./WorkShowcaseCardActions";
import WorkShowcaseCardWorkOverview from "./WorkShowcaseCardWorkOverview";
import WorkShowcaseCardWorkTitle from "./WorkShowcaseCardWorkTitle";
import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import WorkShowcaseCardWorkSummary from "./WorkShowcaseCardWorkSummary";
import WorkShowcaseCardWorkBusinessSectors from "./WorkShowcaseCardWorkBusinessSectors";
import WorkShowcaseCardWorkServices from "./WorkShowcaseCardWorkServices";
import getWorkShowcaseCardCss from "./getWorkShowcaseCardCss";
import WorkShowcaseCardWorkStartDate from "./WorkShowcaseCardWorkStartDate";
import WorkShowcaseCardWorkDuration from "./WorkShowcaseCardWorkDuration";

export type WorkShowcaseCardDetails = WorkCardDetails & {
  /**
   * The services that the work provides.
   */
  workServices: string[];
};

export type WorkShowcaseCardProps = CardProps & WorkShowcaseCardDetails;

function WorkShowcaseCard(props: WorkShowcaseCardProps) {
  const {
    thumbnailSrc,
    workTitle,
    workSummary,
    workBusinessSectors,
    workStartDate,
    workDuration,
    workServices,
    workDetailsHref,
    ...rest
  } = props;
  const css = getWorkShowcaseCardCss();

  return (
    <Card variant="fill" css={css} {...rest}>
      <WorkShowcaseCardMedia component="img" src={thumbnailSrc} />

      <WorkShowcaseCardContent>
        <WorkShowcaseCardWorkOverview>
          <WorkShowcaseCardContentBox verticalSpacing={3} flex="1">
            <WorkShowcaseCardWorkTitle>{workTitle}</WorkShowcaseCardWorkTitle>

            <WorkShowcaseCardWorkSummary>
              {workSummary}
            </WorkShowcaseCardWorkSummary>
          </WorkShowcaseCardContentBox>

          <WorkShowcaseCardContentBox
            orientation="vertical"
            flexGap={4}
            flex="1"
          >
            <WorkShowcaseCardWorkBusinessSectors
              businessSectors={workBusinessSectors}
            />

            <WorkShowcaseCardWorkServices services={workServices} />

            <WorkShowcaseCardContentBox orientation="horizontal">
              <WorkShowcaseCardContentBox flex="1">
                <WorkShowcaseCardWorkStartDate startDate={workStartDate} />
              </WorkShowcaseCardContentBox>

              <WorkShowcaseCardContentBox flex="1">
                <WorkShowcaseCardWorkDuration duration={workDuration} />
              </WorkShowcaseCardContentBox>
            </WorkShowcaseCardContentBox>
          </WorkShowcaseCardContentBox>
        </WorkShowcaseCardWorkOverview>

        <WorkShowcaseCardActions>
          <Button variant="outlined" href={workDetailsHref}>
            View Details Work
          </Button>
        </WorkShowcaseCardActions>
      </WorkShowcaseCardContent>
    </Card>
  );
}

export default WorkShowcaseCard;
