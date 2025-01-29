import clsx from "clsx";
import { format } from "date-fns";

import { Typography, TypographyProps } from "@/_components/Typography";

export type WorkCardWorkTimestampsProps = TypographyProps & {
  /**
   * The date when the work begins.
   */
  startDate: Date;

  /**
   * The date when the work ends.
   */
  endDate: Date;
};

function WorkCardWorkTimestamps(props: WorkCardWorkTimestampsProps) {
  const {
    startDate: startDateFromProps,
    endDate: endDateFromProps,
    variant = "body2Medium",
    color = "neutral-550",
    fontWeight = "medium",
    className,
    ...rest
  } = props;
  const dateFormat = "MMM yyyy";
  const startDate = format(startDateFromProps, dateFormat);
  const endDate = format(endDateFromProps, dateFormat);

  return (
    <Typography
      component="div"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      className={clsx("flow-spacer-x", className)}
      {...rest}
    >
      <Typography component="span" variant="inherit">
        {startDate}
      </Typography>
      <Typography component="span" variant="inherit">
        -
      </Typography>
      <Typography component="span" variant="inherit">
        {endDate}
      </Typography>
    </Typography>
  );
}

export default WorkCardWorkTimestamps;
