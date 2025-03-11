import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"p">, "color">;

function BusinessAttention(props: Props) {
  return <Typography variant="body1Medium" color="neutral-700" {...props} />;
}

export default BusinessAttention;
