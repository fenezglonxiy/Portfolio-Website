/** @jsxImportSource @emotion/react */

"use client";

import { differenceInHours } from "date-fns";

import { Card, CardProps } from "@/_components/Card";
import { WorkCardDetails } from "@/_components/work-card";
import { Button } from "@/_components/Button";

import WorkShowcaseCardMedia from "./WorkShowcaseCardMedia";
import WorkShowcaseCardContent from "./WorkShowcaseCardContent";
import WorkShowcaseCardActions from "./WorkShowcaseCardActions";
import WorkOverview from "./WorkOverview";
import WorkTitle from "./WorkTitle";
import WorkSummary from "./WorkSummary";
import getWorkShowcaseCardCss from "./getWorkShowcaseCardCss";
import WorkStartDate from "./WorkStartDate";
import WorkSection from "./WorkSection";
import WorkSectionTitle from "./WorkSectionTitle";
import WorkDuration from "./WorkDuration";
import WorkBusinessSectorBox from "./WorkBusinessSectorBox";
import WorkBusinessSector from "./WorkBusinessSector";
import WorkServiceBox from "./WorkServiceBox";
import WorkService from "./WorkService";
import WorkTimeTracking from "./WorkTimeTracking";
import WorkShowcaseCardText from "./WorkShowcaseCardText";
import WorkShowcaseCardSectionBox from "./WorkShowcaseCardSectionBox";

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
    workEndDate,
    workServices,
    workDetailsHref,
    ...rest
  } = props;
  const workDuration = differenceInHours(workEndDate, workStartDate);
  const css = getWorkShowcaseCardCss();

  return (
    <Card variant="fill" css={css} {...rest}>
      <WorkShowcaseCardMedia component="img" src={thumbnailSrc} />

      <WorkShowcaseCardContent>
        <WorkOverview>
          <WorkShowcaseCardText>
            <WorkTitle>{workTitle}</WorkTitle>

            <WorkSummary>{workSummary}</WorkSummary>
          </WorkShowcaseCardText>

          <WorkShowcaseCardSectionBox>
            <WorkSection>
              <WorkSectionTitle>Business Sectors</WorkSectionTitle>

              <WorkBusinessSectorBox>
                {workBusinessSectors.map((businessSector, idx) => (
                  <WorkBusinessSector key={idx} label={businessSector} />
                ))}
              </WorkBusinessSectorBox>
            </WorkSection>

            <WorkSection>
              <WorkSectionTitle>Services</WorkSectionTitle>

              <WorkServiceBox>
                {workServices.map((service, idx) => (
                  <WorkService key={idx} label={service} />
                ))}
              </WorkServiceBox>
            </WorkSection>

            <WorkTimeTracking>
              <WorkSection>
                <WorkSectionTitle>Start Date</WorkSectionTitle>

                <WorkStartDate>{workStartDate}</WorkStartDate>
              </WorkSection>

              <WorkSection>
                <WorkSectionTitle>Duration</WorkSectionTitle>

                <WorkDuration>{workDuration}</WorkDuration>
              </WorkSection>
            </WorkTimeTracking>
          </WorkShowcaseCardSectionBox>
        </WorkOverview>

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
