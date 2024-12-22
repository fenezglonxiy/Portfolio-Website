import React from "react";
import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import { WorkShowcaseCardProps } from "./WorkShowcaseCard";
import WorkShowcaseCardContentBoxTitle from "./WorkShowcaseCardContentBoxTitle";
import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardWorkDurationProps =
  React.ComponentPropsWithoutRef<"div"> & {
    duration: WorkShowcaseCardProps["workDuration"];
    children?: undefined | null;
  };

function WorkShowcaseCardWorkDuration(
  props: WorkShowcaseCardWorkDurationProps
) {
  const { duration, ...rest } = props;

  return (
    <WorkShowcaseCardContentBox verticalSpacing={2} {...rest}>
      <WorkShowcaseCardContentBoxTitle>
        Duration
      </WorkShowcaseCardContentBoxTitle>

      <Typography variant="body1Medium">{duration.asHours()} hours</Typography>
    </WorkShowcaseCardContentBox>
  );
}

export default WorkShowcaseCardWorkDuration;
