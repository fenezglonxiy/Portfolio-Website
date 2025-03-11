/** @jsxImportSource @emotion/react */

"use client";

import { Card, CardProps } from "@/_components/Card";
import { Button } from "@/_components/Button";
import { VisuallyHidden } from "@/_components/visually-hidden";
import { WorkCardDetails } from "@/types";

import ExpandedWorkCardMedia from "./ExpandedWorkCardMedia";
import ExpandedWorkCardContent from "./ExpandedWorkCardContent";
import ExpandedWorkCardActions from "./ExpandedWorkCardActions";
import WorkOverview from "./WorkOverview";
import WorkTitle from "./WorkTitle";
import WorkSummary from "./WorkSummary";
import getExpandedWorkCardCss from "./getExpandedWorkCardCss";
import WorkSection from "./WorkSection";
import WorkSectionTitle from "./WorkSectionTitle";
import WorkBusinessSectorBox from "./WorkBusinessSectorBox";
import WorkBusinessSector from "./WorkBusinessSector";
import WorkServiceBox from "./WorkServiceBox";
import WorkService from "./WorkService";
import WorkTimeTracking from "./WorkTimeTracking";
import ExpandedWorkCardText from "./ExpandedWorkCardText";
import WorkSectionBox from "./WorkSectionBox";
import WorkTimePoint from "./WorkTimePoint";

type Props = CardProps & WorkCardDetails;

function ExpandedWorkCard(props: Props) {
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
  const css = getExpandedWorkCardCss();

  return (
    <Card variant="fill" css={css} borderRadius="none" {...rest}>
      <VisuallyHidden href={workDetailsHref} label={workTitle}>
        <ExpandedWorkCardMedia component="img" src={mediaSrc} />
      </VisuallyHidden>

      <ExpandedWorkCardContent>
        <VisuallyHidden href={workDetailsHref} label={workTitle}>
          <WorkOverview>
            <ExpandedWorkCardText>
              <WorkTitle>{workTitle}</WorkTitle>

              <WorkSummary>{workSummary}</WorkSummary>
            </ExpandedWorkCardText>

            <WorkSectionBox>
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
            </WorkSectionBox>
          </WorkOverview>
        </VisuallyHidden>

        <ExpandedWorkCardActions>
          <Button variant="outlined" href={workDetailsHref}>
            View Details Work
          </Button>
        </ExpandedWorkCardActions>
      </ExpandedWorkCardContent>
    </Card>
  );
}

export default ExpandedWorkCard;
