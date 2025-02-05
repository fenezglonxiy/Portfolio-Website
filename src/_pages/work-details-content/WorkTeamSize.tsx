import { Typography } from "@/_components/Typography";

export type WorkTeamSizeProps = Omit<
  React.ComponentPropsWithoutRef<"span">,
  "color" | "children"
> & {
  /**
   * The number of people participating in the work.
   */
  size: number;
};

function WorkTeamSize(props: WorkTeamSizeProps) {
  const { size, ...rest } = props;

  if (size < 1) {
    throw new Error(
      "The number of people participating in a work could not be smaller than one"
    );
  }

  const noun = size === 1 ? "person" : "people";

  return (
    <Typography component="span" variant="inherit" {...rest}>
      {size} {noun}
    </Typography>
  );
}

export default WorkTeamSize;
