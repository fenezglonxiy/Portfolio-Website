import React from "react";

import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"h6">, "color">;

function WorkTitle(props: Props) {
  return (
    <Typography
      variant="h6"
      color="neutral-800"
      fontWeight="semi-bold"
      {...props}
    />
  );
}

export default WorkTitle;
