/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { WorkCard } from "@/_components/work-card";
import { WorkCardDetails } from "@/types";

import getWorkDetailsOtherWorksShowcaseCss from "./getWorkDetailsOtherWorksShowcaseCss";

export type WorkDetailsOtherWorksShowcaseProps =
  React.HTMLAttributes<HTMLDivElement> & {
    works: Array<WorkCardDetails>;
    children?: undefined | null;
  };

function WorkDetailsOtherWorksShowcase(
  props: WorkDetailsOtherWorksShowcaseProps
) {
  const { works, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksShowcaseCss(theme);

  return (
    <div css={css} {...rest}>
      {works.map((work, idx) => (
        <WorkCard
          key={idx}
          mediaSrc={work.mediaSrc}
          workTitle={work.workTitle}
          workBusinessSectors={work.workBusinessSectors}
          workStartDate={work.workStartDate}
          workEndDate={work.workEndDate}
          workSummary={work.workSummary}
          workDetailsHref={work.workDetailsHref}
        />
      ))}
    </div>
  );
}

export default WorkDetailsOtherWorksShowcase;
