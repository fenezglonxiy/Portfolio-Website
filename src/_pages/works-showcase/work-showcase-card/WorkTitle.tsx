import { Typography } from "@/_components/Typography";

export type WorkTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h4">,
  "color"
>;

function WorkTitle(props: WorkTitleProps) {
  return <Typography variant="h4" {...props} />;
}

export default WorkTitle;
