import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardWorkTitleProps =
  React.ComponentPropsWithoutRef<"h4">;

function WorkShowcaseCardWorkTitle(props: WorkShowcaseCardWorkTitleProps) {
  const { color: _, ...rest } = props;

  return <Typography variant="h4" {...rest} />;
}

export default WorkShowcaseCardWorkTitle;
