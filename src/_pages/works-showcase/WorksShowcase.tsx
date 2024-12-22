/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getWorksShowcaseCss from "./getWorksShowcaseCss";
import WorksShowcaseContent from "./WorksShowcaseContent";
import moment from "moment";
import { WorkShowcaseCard } from "./work-showcase-card";

export type WorksShowcaseProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: undefined | null;
};

const works = [
  {
    thumbnailSrc: "image.png",
    workTitle: "Struktura",
    workBusinessSectors: ["Construction", "Test"],
    workStartDate: moment(),
    workDuration: moment.duration(2, "month"),
    workSummary:
      "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
    workServices: ["Web Design", "Web Development", "Mobile Development"],
    workDetailsHref: "/",
  },
  {
    thumbnailSrc: "image.png",
    workTitle: "Struktura",
    workBusinessSectors: ["Construction", "Test"],
    workStartDate: moment(),
    workDuration: moment.duration(2, "month"),
    workSummary:
      "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
    workServices: ["Web Design", "Web Development", "Mobile Development"],
    workDetailsHref: "/",
  },
  {
    thumbnailSrc: "image.png",
    workTitle: "Struktura",
    workBusinessSectors: ["Construction", "Test"],
    workStartDate: moment(),
    workDuration: moment.duration(2, "month"),
    workSummary:
      "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
    workServices: ["Web Design", "Web Development", "Mobile Development"],
    workDetailsHref: "/",
  },
  {
    thumbnailSrc: "image.png",
    workTitle: "Struktura",
    workBusinessSectors: ["Construction", "Test"],
    workStartDate: moment(),
    workDuration: moment.duration(2, "month"),
    workSummary:
      "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
    workServices: ["Web Design", "Web Development", "Mobile Development"],
    workDetailsHref: "/",
  },
];

function WorksShowcase(props: WorksShowcaseProps) {
  const theme = useTheme();
  const css = getWorksShowcaseCss(theme);

  return (
    <section css={css} {...props}>
      <WorksShowcaseContent>
        {works.map((work, idx) => (
          <WorkShowcaseCard
            key={idx}
            thumbnailSrc={work.thumbnailSrc}
            workBusinessSectors={work.workBusinessSectors}
            workDetailsHref={work.workDetailsHref}
            workDuration={work.workDuration}
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
