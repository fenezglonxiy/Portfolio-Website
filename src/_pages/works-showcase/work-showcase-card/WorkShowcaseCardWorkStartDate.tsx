import { format } from "date-fns";

import { Typography } from "@/_components/Typography";

import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import { WorkShowcaseCardProps } from "./WorkShowcaseCard";
import WorkShowcaseCardContentBoxTitle from "./WorkShowcaseCardContentBoxTitle";

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
        {format(startDate, "MMMM yyyy")}
      </Typography>
    </WorkShowcaseCardContentBox>
  );
}

export default WorkShowcaseCardWorkStartDate;
