import React from "react";

import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"h3">, "color">;

function AchievementShowcaseTitle(props: Props) {
  return (
    <Typography component="h3" variant="h4" color="neutral-900" {...props} />
  );
}

export default AchievementShowcaseTitle;
