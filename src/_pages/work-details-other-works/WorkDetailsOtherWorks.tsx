/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import WorkDetailsOtherWorksContent from "./WorkDetailsOtherWorksContent";
import WorkDetailsOtherWorksHeader from "./WorkDetailsOtherWorksHeader";
import { useTheme } from "@mui/material";
import getWorkDetailsOtherWorksCss from "./getWorkDetailsOtherWorksCss";
import moment from "moment";
import WorkDetailsOtherWorksShowcase from "./WorkDetailsOtherWorksShowcase";

const works = [
  {
    thumbnailSrc: "card-thumbnail.png",
    workTitle: "Struktura",
    workBusinessSectors: ["Construction", "Test"],
    workStartDate: moment(),
    workDuration: moment.duration(2, "month"),
    workSummary:
      "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
    workDetailsHref: "/",
  },
  {
    thumbnailSrc: "card-thumbnail.png",
    workTitle: "Struktura",
    workBusinessSectors: ["Construction", "Test"],
    workStartDate: moment(),
    workDuration: moment.duration(2, "month"),
    workSummary:
      "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
    workDetailsHref: "/",
  },
];

export type WorkDetailsOtherWorksProps =
  React.ComponentPropsWithoutRef<"aside">;

function WorkDetailsOtherWorks(props: WorkDetailsOtherWorksProps) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksCss(theme);

  return (
    <aside css={css} {...props}>
      <WorkDetailsOtherWorksContent>
        <WorkDetailsOtherWorksHeader />

        <WorkDetailsOtherWorksShowcase works={works} />
      </WorkDetailsOtherWorksContent>
    </aside>
  );
}

export default WorkDetailsOtherWorks;
