import { Typography } from "@/_components/Typography";

import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import WorkShowcaseCardContentBoxTitle from "./WorkShowcaseCardContentBoxTitle";

export type WorkShowcaseCardWorkDurationProps =
  React.ComponentPropsWithoutRef<"div"> & {
    duration: number;
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

      <Typography variant="body1Medium">{duration} hours</Typography>
    </WorkShowcaseCardContentBox>
  );
}

export default WorkShowcaseCardWorkDuration;
