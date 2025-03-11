import React from "react";

import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"p">, "color">;

function WorkSummary(props: Props) {
  return <Typography color="neutral-550" {...props} />;
}

export default WorkSummary;
