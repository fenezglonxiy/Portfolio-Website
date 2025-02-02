/** @jsxImportSource @emotion/react */

"use client";

import { Card, CardProps } from "@/_components/Card";
import { Button } from "@/_components/Button";
import { WorkCardDetails } from "@/types";

import WorkShowcaseCardMedia from "./WorkShowcaseCardMedia";
import WorkShowcaseCardContent from "./WorkShowcaseCardContent";
import WorkShowcaseCardActions from "./WorkShowcaseCardActions";
import WorkOverview from "./WorkOverview";
import WorkTitle from "./WorkTitle";
import WorkSummary from "./WorkSummary";
import getWorkShowcaseCardCss from "./getWorkShowcaseCardCss";
import WorkSection from "./WorkSection";
import WorkSectionTitle from "./WorkSectionTitle";
import WorkBusinessSectorBox from "./WorkBusinessSectorBox";
import WorkBusinessSector from "./WorkBusinessSector";
import WorkServiceBox from "./WorkServiceBox";
import WorkService from "./WorkService";
import WorkTimeTracking from "./WorkTimeTracking";
import WorkShowcaseCardText from "./WorkShowcaseCardText";
import WorkShowcaseCardSectionBox from "./WorkShowcaseCardSectionBox";
import WorkTimePoint from "./WorkTimePoint";

export type WorkShowcaseCardProps = CardProps & WorkCardDetails;

function WorkShowcaseCard(props: WorkShowcaseCardProps) {
  const {
    mediaSrc,
    workTitle,
    workSummary,
    workBusinessSectors,
    workStartDate,
    workEndDate,
    workServices,
    workDetailsHref,
    ...rest
  } = props;
  const css = getWorkShowcaseCardCss();

  return (
    <Card variant="fill" css={css} {...rest}>
      <WorkShowcaseCardMedia component="img" src={mediaSrc} />

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

                <WorkTimePoint>{workStartDate}</WorkTimePoint>
              </WorkSection>

              <WorkSection>
                <WorkSectionTitle>End Date</WorkSectionTitle>

                <WorkTimePoint>{workEndDate}</WorkTimePoint>
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
