import { format } from "date-fns";
import { Typography } from "../Typography";

export type WorkTimePointProps = Omit<
  React.ComponentPropsWithoutRef<"span">,
  "color" | "children"
> & {
  children?: Date;
};

function WorkTimePoint(props: WorkTimePointProps) {
  const { children, ...rest } = props;

  if (!children) {
    return undefined;
  }

  return (
    <Typography component="span" variant="inherit" {...rest}>
      {format(children, "MMM yyyy")}
    </Typography>
  );
}

export default WorkTimePoint;
