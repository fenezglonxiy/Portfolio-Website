import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"p">, "color">;

function WorkSectionTitle(props: Props) {
  return <Typography variant="body2Medium" color="neutral-550" {...props} />;
}

export default WorkSectionTitle;
