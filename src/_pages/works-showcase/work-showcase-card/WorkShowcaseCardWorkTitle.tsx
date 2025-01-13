import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardWorkTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h4">,
  "color"
>;

function WorkShowcaseCardWorkTitle(props: WorkShowcaseCardWorkTitleProps) {
  return <Typography variant="h4" {...props} />;
}

export default WorkShowcaseCardWorkTitle;
