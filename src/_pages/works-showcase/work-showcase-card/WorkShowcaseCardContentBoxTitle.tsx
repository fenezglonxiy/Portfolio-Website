import { Typography } from "@/_components/Typography";

export type WorkShowcaseCardContentBoxTitleProps =
  React.ComponentPropsWithoutRef<"p">;

function WorkShowcaseCardContentBoxTitle(
  props: WorkShowcaseCardContentBoxTitleProps
) {
  const { color: _, ...rest } = props;

  return <Typography variant="body2Medium" color="neutral-550" {...rest} />;
}

export default WorkShowcaseCardContentBoxTitle;
