import { Typography } from "@/_components/Typography";
import React from "react";

type HomeAboutMeSummaryProps = React.HTMLAttributes<HTMLDivElement>;

function HomeAboutMeSummary(props: HomeAboutMeSummaryProps) {
  return (
    <div {...props}>
      <Typography variant="h1" color="neutral-900" fontWeight="semi-bold">
        A web developer focused on creating efficient digital experience
      </Typography>
    </div>
  );
}

export default HomeAboutMeSummary;
