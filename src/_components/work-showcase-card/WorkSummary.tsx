import { Typography } from "@/_components/Typography";

export type WorkSummaryProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function WorkSummary(props: WorkSummaryProps) {
  return <Typography variant="body2Medium" color="neutral-550" {...props} />;
}

export default WorkSummary;
