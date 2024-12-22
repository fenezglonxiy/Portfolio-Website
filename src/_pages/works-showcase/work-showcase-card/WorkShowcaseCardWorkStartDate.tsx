import React from "react";
import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import { WorkShowcaseCardProps } from "./WorkShowcaseCard";
import WorkShowcaseCardContentBoxTitle from "./WorkShowcaseCardContentBoxTitle";
import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardWorkStartDateProps =
  React.ComponentPropsWithoutRef<"div"> & {
    startDate: WorkShowcaseCardProps["workStartDate"];
    children?: undefined | null;
  };

function WorkShowcaseCardWorkStartDate(
  props: WorkShowcaseCardWorkStartDateProps
) {
  const { startDate, ...rest } = props;

  return (
    <WorkShowcaseCardContentBox verticalSpacing={2} {...rest}>
      <WorkShowcaseCardContentBoxTitle>
        Start Date
      </WorkShowcaseCardContentBoxTitle>

      <Typography variant="body1Medium">
        {startDate.format("MMMM YYYY")}
      </Typography>
    </WorkShowcaseCardContentBox>
  );
}

export default WorkShowcaseCardWorkStartDate;
