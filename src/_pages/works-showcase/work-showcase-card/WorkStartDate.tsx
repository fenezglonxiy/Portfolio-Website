import { format } from "date-fns";

import { Typography } from "@/_components/Typography";

import { WorkShowcaseCardProps } from "./WorkShowcaseCard";

export type WorkStartDateProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "color"
> & {
  children: WorkShowcaseCardProps["workStartDate"];
};

function WorkStartDate(props: WorkStartDateProps) {
  const { children, ...rest } = props;

  return (
    <Typography component="div" variant="body1Medium" {...rest}>
      {format(children, "MMMM yyyy")}
    </Typography>
  );
}

export default WorkStartDate;
