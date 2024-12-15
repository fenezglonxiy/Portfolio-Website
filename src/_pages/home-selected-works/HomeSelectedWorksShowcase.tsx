/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { WorkCard, WorkCardProps } from "@/_components/work-card";
import getHomeSelectedWorksShowcaseCss from "./getHomeSelectedWorksShowcaseCss";
import { useTheme } from "@mui/material";

export type HomeSelectedWorksShowcaseProps =
  React.HTMLAttributes<HTMLDivElement> & {
    works: Array<WorkCardProps>;
    children?: undefined | null;
  };

function HomeSelectedWorksShowcase(props: HomeSelectedWorksShowcaseProps) {
  const { works, ...rest } = props;
  const theme = useTheme();
  const css = getHomeSelectedWorksShowcaseCss(theme);

  return (
    <div css={css} {...rest}>
      {works.map((work, idx) => (
        <WorkCard
          key={idx}
          thumbnailSrc={work.thumbnailSrc}
          workTitle={work.workTitle}
          workBusinessSectors={work.workBusinessSectors}
          workDuration={work.workDuration}
          workStartDate={work.workStartDate}
          workSummary={work.workSummary}
          workDetailsHref={work.workDetailsHref}
        />
      ))}
    </div>
  );
}

export default HomeSelectedWorksShowcase;
