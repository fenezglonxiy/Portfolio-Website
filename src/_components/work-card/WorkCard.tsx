/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Card, CardProps } from "@/_components/Card";
import { Button } from "@/_components/Button";
import { VisuallyHidden } from "@/_components/visually-hidden";
import { WorkCardDetails } from "@/types";

import WorkCardMedia from "./WorkCardMedia";
import WorkCardContent from "./WorkCardContent";
import WorkOverview from "./WorkOverview";
import WorkCardContentBox from "./WorkCardContentBox";
import WorkTitle from "./WorkTitle";
import WorkTimeTracking from "./WorkTimeTracking";
import WorkSummary from "./WorkSummary";
import WorkCardActions from "./WorkCardActions";
import WorkBusinessSectorBox from "./WorkBusinessSectorBox";
import WorkTimePoint from "./WorkTimePoint";
import WorkBusinessSector from "./WorkBusinessSector";
import WorkTimePointDivider from "./WorkTimePointDivider";
import getWorkCardCss from "./getWorkCardCss";

type Props = Omit<CardProps, "children"> &
  Omit<WorkCardDetails, "workServices">;

function WorkCard(props: Props) {
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

  const theme = useTheme();
  const css = getWorkCardCss(theme);

  return (
    <Card css={css} {...rest}>
      <VisuallyHidden href={workDetailsHref} label={workTitle}>
        <WorkCardMedia component="img" src={mediaSrc} />
      </VisuallyHidden>

      <WorkCardContent>
        <VisuallyHidden href={workDetailsHref} label={workTitle}>
          <WorkOverview>
            <WorkCardContentBox verticalSpacing={3}>
              <WorkTitle>{workTitle}</WorkTitle>

              <WorkCardContentBox verticalSpacing={2}>
                <WorkBusinessSectorBox>
                  {workBusinessSectors.map((businessSector, idx) => (
                    <WorkBusinessSector key={idx} label={businessSector} />
                  ))}
                </WorkBusinessSectorBox>

                <WorkTimeTracking>
                  <WorkTimePoint>{workStartDate}</WorkTimePoint>
                  <WorkTimePointDivider />
                  <WorkTimePoint>{workEndDate}</WorkTimePoint>
                </WorkTimeTracking>
              </WorkCardContentBox>
            </WorkCardContentBox>

            <WorkSummary>{workSummary}</WorkSummary>
          </WorkOverview>
        </VisuallyHidden>

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
