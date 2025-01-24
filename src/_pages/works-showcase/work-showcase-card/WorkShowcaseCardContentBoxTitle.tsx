import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardContentBoxTitleProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function WorkShowcaseCardContentBoxTitle(
  props: WorkShowcaseCardContentBoxTitleProps
) {
  return <Typography variant="body2Medium" color="neutral-550" {...props} />;
}

export default WorkShowcaseCardContentBoxTitle;
