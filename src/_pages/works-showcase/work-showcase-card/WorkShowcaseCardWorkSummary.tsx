import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardWorkSummaryProps =
  React.ComponentPropsWithoutRef<"p">;

function WorkShowcaseCardWorkSummary(props: WorkShowcaseCardWorkSummaryProps) {
  const { color: _, ...rest } = props;

  return <Typography variant="body2Medium" color="neutral-550" {...rest} />;
}

export default WorkShowcaseCardWorkSummary;
