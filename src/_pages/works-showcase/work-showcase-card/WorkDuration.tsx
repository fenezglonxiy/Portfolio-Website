import { Typography } from "@/_components/Typography";

export type WorkDurationProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "color"
> & {
  children: number;
};

function WorkDuration(props: WorkDurationProps) {
  const { children, ...rest } = props;

  return (
    <Typography component="div" variant="body1Medium" {...rest}>
      {children} hours
    </Typography>
  );
}

export default WorkDuration;
