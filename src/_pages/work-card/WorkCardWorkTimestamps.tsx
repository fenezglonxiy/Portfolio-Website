import { Typography, TypographyProps } from "@/_components/Typography";
import moment from "moment";

export type WorkCardWorkTimestampsProps = TypographyProps & {
  /**
   * Specify the date when the work begins.
   */
  startDate: moment.Moment;

  /**
   * Specify the duration of the work.
   */
  duration: moment.Duration;
};

function WorkCardWorkTimestamps(props: WorkCardWorkTimestampsProps) {
  const {
    startDate: startDateFromProps,
    duration,
    variant = "body2Medium",
    color = "neutral-550",
    fontWeight = "medium",
    ...rest
  } = props;
  const dateFormat = "MMM YYYY";
  const startDate = startDateFromProps.format(dateFormat);
  const endDate = moment(startDateFromProps).add(duration).format(dateFormat);

  return (
    <Typography
      component="div"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
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
