/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { workCards } from "@/dummyData";

import WorkDetailsOtherWorksContent from "./WorkDetailsOtherWorksContent";
import WorkDetailsOtherWorksHeader from "./WorkDetailsOtherWorksHeader";
import getWorkDetailsOtherWorksCss from "./getWorkDetailsOtherWorksCss";
import WorkDetailsOtherWorksShowcase from "./WorkDetailsOtherWorksShowcase";

export type WorkDetailsOtherWorksProps =
  React.ComponentPropsWithoutRef<"aside">;

function WorkDetailsOtherWorks(props: WorkDetailsOtherWorksProps) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksCss(theme);

  return (
    <aside css={css} {...props}>
      <WorkDetailsOtherWorksContent>
        <WorkDetailsOtherWorksHeader />

        <WorkDetailsOtherWorksShowcase works={Array(2).fill(workCards)} />
      </WorkDetailsOtherWorksContent>
    </aside>
  );
}

export default WorkDetailsOtherWorks;
