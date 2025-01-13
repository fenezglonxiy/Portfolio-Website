import clsx from "clsx";
import React from "react";

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"div">;

const VisuallyHidden = React.forwardRef(function VisuallyHidden(
  props: VisuallyHiddenProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, ...rest } = props;
  return (
    <div ref={ref} className={clsx("visually-hidden", className)} {...rest} />
  );
});

export default VisuallyHidden;
