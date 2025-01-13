import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardWorkSummaryProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function WorkShowcaseCardWorkSummary(props: WorkShowcaseCardWorkSummaryProps) {
  return <Typography variant="body2Medium" color="neutral-550" {...props} />;
}

export default WorkShowcaseCardWorkSummary;
