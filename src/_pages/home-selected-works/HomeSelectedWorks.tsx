/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { WorkCard } from "@/_components/work-card";
import { workCards } from "@/dummyData";

import getHomeSelectedWorksCss from "./getHomeSelectedWorksCss";
import HomeSelectedWorksContent from "./HomeSelectedWorksContent";
import HomeSelectedWorksHeader from "./HomeSelectedWorksHeader";
import SelectedWorksShowcase from "./SelectedWorksShowcase";
import HomeSelectedWorksContainer from "./HomeSelectedWorksContainer";

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
        <HomeSelectedWorksContainer>
          <HomeSelectedWorksHeader>
            <Typography variant="h3" fontWeight="semi-bold">
              Selected works
            </Typography>

            <div>
              <Button
                href="/works"
                variant="outlined"
                color="primary"
                size="large"
              >
                View All Works
              </Button>
            </div>
          </HomeSelectedWorksHeader>

          <SelectedWorksShowcase>
            {workCards.map((work, idx) => (
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
          </SelectedWorksShowcase>
        </HomeSelectedWorksContainer>
      </HomeSelectedWorksContent>
    </section>
  );
}

export default HomeSelectedWorks;
