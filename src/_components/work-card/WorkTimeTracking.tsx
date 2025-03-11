import clsx from "clsx";

import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"div">, "color">;

function WorkTimeTracking(props: Props) {
  const { className, ...rest } = props;

  return (
    <Typography
      component="div"
      variant="body2Medium"
      color="neutral-550"
      fontWeight="medium"
      className={clsx("flow-spacer-x", className)}
      {...rest}
    />
  );
}

export default WorkTimeTracking;
