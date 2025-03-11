import { Typography } from "../Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"span">, "color" | "children">;

function WorkTimePointDivider(props: Props) {
  return (
    <Typography component="span" variant="inherit" {...props}>
      -
    </Typography>
  );
}

export default WorkTimePointDivider;
