/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { workShowcaseCards } from "@/dummyData";
import { WorkShowcaseCard } from "@/_components/work-showcase-card";

import getWorksShowcaseCss from "./getWorksShowcaseCss";
import WorksShowcaseContent from "./WorksShowcaseContent";

export type WorksShowcaseProps = React.ComponentPropsWithoutRef<"div"> & {
  children?: undefined | null;
};

function WorksShowcase(props: WorksShowcaseProps) {
  const theme = useTheme();
  const css = getWorksShowcaseCss(theme);

  return (
    <section css={css} {...props}>
      <WorksShowcaseContent>
        {workShowcaseCards.map((work, idx) => (
          <WorkShowcaseCard
            key={idx}
            mediaSrc={work.mediaSrc}
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
