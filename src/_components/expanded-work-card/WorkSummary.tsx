import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"p">, "color">;

function WorkSummary(props: Props) {
  return <Typography variant="body2Medium" color="neutral-550" {...props} />;
}

export default WorkSummary;
