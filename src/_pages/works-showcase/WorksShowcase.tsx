/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { workShowcaseCard } from "@/dummyData";

import getWorksShowcaseCss from "./getWorksShowcaseCss";
import WorksShowcaseContent from "./WorksShowcaseContent";
import { WorkShowcaseCard } from "./work-showcase-card";

export type WorksShowcaseProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: undefined | null;
};

function WorksShowcase(props: WorksShowcaseProps) {
  const theme = useTheme();
  const css = getWorksShowcaseCss(theme);

  return (
    <section css={css} {...props}>
      <WorksShowcaseContent>
        {Array(4)
          .fill(workShowcaseCard)
          .map((work, idx) => (
            <WorkShowcaseCard
              key={idx}
              thumbnailSrc={work.thumbnailSrc}
              workBusinessSectors={work.workBusinessSectors}
              workDetailsHref={work.workDetailsHref}
              workEndDate={work.workEndDate}
              workServices={work.workServices}
              workStartDate={work.workStartDate}
              workSummary={work.workSummary}
              workTitle={work.workTitle}
            />
          ))}
      </WorksShowcaseContent>
    </section>
  );
}

export default WorksShowcase;
