import clsx from "clsx";
import React from "react";

export type SideDetailsSectionProps = React.ComponentPropsWithoutRef<"li">;

function SideDetailsSection(props: SideDetailsSectionProps) {
  const { className, ...rest } = props;

  return <li className={clsx("flow-spacer-y", className)} {...rest} />;
}

export default SideDetailsSection;
