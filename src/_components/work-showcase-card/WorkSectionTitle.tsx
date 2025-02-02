import { Typography } from "@/_components/Typography";

export type WorkSectionTitleProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function WorkSectionTitle(props: WorkSectionTitleProps) {
  return <Typography variant="body2Medium" color="neutral-550" {...props} />;
}

export default WorkSectionTitle;
