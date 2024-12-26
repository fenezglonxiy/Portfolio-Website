/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import moment from "moment";

import getHomeSelectedWorksCss from "./getHomeSelectedWorksCss";
import HomeSelectedWorksContent from "./HomeSelectedWorksContent";
import HomeSelectedWorksHeader from "./HomeSelectedWorksHeader";
import HomeSelectedWorksShowcase from "./HomeSelectedWorksShowcase";

export type HomeSelectedWorksProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

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

function HomeSelectedWorks(props: HomeSelectedWorksProps) {
  const theme = useTheme();
  const css = getHomeSelectedWorksCss(theme);

  return (
    <section css={css} {...props}>
      <HomeSelectedWorksContent>
        <HomeSelectedWorksHeader />

        <HomeSelectedWorksShowcase works={works} />
      </HomeSelectedWorksContent>
    </section>
  );
}

export default HomeSelectedWorks;
