/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { workCards } from "@/dummyData";

import getHomeSelectedWorksCss from "./getHomeSelectedWorksCss";
import HomeSelectedWorksContent from "./HomeSelectedWorksContent";
import HomeSelectedWorksHeader from "./HomeSelectedWorksHeader";
import HomeSelectedWorksShowcase from "./HomeSelectedWorksShowcase";

export type HomeSelectedWorksProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

function HomeSelectedWorks(props: HomeSelectedWorksProps) {
  const theme = useTheme();
  const css = getHomeSelectedWorksCss(theme);

  return (
    <section css={css} {...props}>
      <HomeSelectedWorksContent>
        <HomeSelectedWorksHeader />

        <HomeSelectedWorksShowcase works={workCards} />
      </HomeSelectedWorksContent>
    </section>
  );
}

export default HomeSelectedWorks;
