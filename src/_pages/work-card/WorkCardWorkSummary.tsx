import { Typography, TypographyProps } from "@/_components/Typography";

export type WorkCardWorkSummaryProps = TypographyProps;

function WorkCardWorkSummary(props: WorkCardWorkSummaryProps) {
  const { color = "neutral-550", ...rest } = props;

  return <Typography color={color} {...rest} />;
}

export default WorkCardWorkSummary;
