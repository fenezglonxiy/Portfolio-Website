import { format } from "date-fns";

import { Typography } from "@/_components/Typography";

export type WorkTimePointProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color" | "children"
> & {
  /**
   * The start date or the end date of the work.
   */
  date: Date;
};

function WorkTimePoint(props: WorkTimePointProps) {
  const { date, ...rest } = props;

  return (
    <Typography
      variant="body1"
      fontWeight="medium"
      color="neutral-550"
      {...rest}
    >
      {format(date, "MMMM yyyy")}
    </Typography>
  );
}

export default WorkTimePoint;
