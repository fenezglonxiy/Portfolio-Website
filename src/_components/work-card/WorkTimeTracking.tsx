import clsx from "clsx";
import { format } from "date-fns";

import { Typography } from "@/_components/Typography";

export type WorkTimeTrackingProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color"
>;

function WorkTimeTracking(props: WorkTimeTrackingProps) {
  const { className, ...rest } = props;

  return (
    <Typography
      component="div"
      variant="body2Medium"
      color="neutral-550"
      fontWeight="medium"
      className={clsx("flow-spacer-x", className)}
      {...rest}
    />
  );
}

export default WorkTimeTracking;
