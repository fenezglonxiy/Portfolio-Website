import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"h4">, "color">;

function WorkTitle(props: Props) {
  return <Typography variant="h4" {...props} />;
}

export default WorkTitle;
