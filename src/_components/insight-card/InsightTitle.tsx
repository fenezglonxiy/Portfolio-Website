import React from "react";

import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"h4">, "color">;

function InsightTitle(props: Props) {
  return (
    <Typography
      component="h4"
      variant="subtitle2"
      fontWeight="bold"
      lineClamp={3}
      {...props}
    />
  );
}

export default InsightTitle;
