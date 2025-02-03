import { Typography } from "../Typography";

export type WorkTimePointDividerProps = Omit<
  React.ComponentPropsWithoutRef<"span">,
  "color" | "children"
>;

function WorkTimePointDivider(props: WorkTimePointDividerProps) {
  return (
    <Typography component="span" variant="inherit" {...props}>
      -
    </Typography>
  );
}

export default WorkTimePointDivider;
