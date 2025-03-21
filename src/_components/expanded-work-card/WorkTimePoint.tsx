import { format } from "date-fns";

import { Typography } from "@/_components/Typography";

type Props = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "color"
> & {
  children: Date;
};

function WorkTimePoint(props: Props) {
  const { children, ...rest } = props;

  return (
    <Typography component="div" variant="body1Medium" {...rest}>
      {format(children, "MMMM yyyy")}
    </Typography>
  );
}

export default WorkTimePoint;
