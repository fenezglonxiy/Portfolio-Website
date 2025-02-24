/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { WorkCard } from "@/_components/work-card";
import { workCards } from "@/dummyData";

import WorkDetailsOtherWorksContent from "./WorkDetailsOtherWorksContent";
import WorkDetailsOtherWorksHeader from "./WorkDetailsOtherWorksHeader";
import getWorkDetailsOtherWorksCss from "./getWorkDetailsOtherWorksCss";
import WorkDetailsOtherWorksShowcase from "./WorkDetailsOtherWorksShowcase";
import WorkDetailsOtherWorksContainer from "./WorkDetailsOtherWorksContainer";
import WorkDetailsOtherWorksCTABox from "./WorkDetailsOtherWorksCTABox";
import WorkDetailsOtherWorksHeaderCTABox from "./WorkDetailsOtherWorksHeaderCTABox";

export type WorkDetailsOtherWorksProps =
  React.ComponentPropsWithoutRef<"aside">;

function WorkDetailsOtherWorks(props: WorkDetailsOtherWorksProps) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksCss(theme);

  return (
    <aside css={css} {...props}>
      <WorkDetailsOtherWorksContent>
        <WorkDetailsOtherWorksContainer>
          <WorkDetailsOtherWorksHeader>
            <Typography variant="h3" fontWeight="semi-bold">
              What’s next?
            </Typography>

            <WorkDetailsOtherWorksHeaderCTABox>
              <Button
                href="/works"
                variant="outlined"
                color="primary"
                size="large"
              >
                View All Works
              </Button>
            </WorkDetailsOtherWorksHeaderCTABox>
          </WorkDetailsOtherWorksHeader>

          <WorkDetailsOtherWorksShowcase>
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
          </WorkDetailsOtherWorksShowcase>

          <WorkDetailsOtherWorksCTABox>
            <Button
              href="/works"
              variant="outlined"
              color="primary"
              shape="pill"
              fullWidth
            >
              View All Works
            </Button>
          </WorkDetailsOtherWorksCTABox>
        </WorkDetailsOtherWorksContainer>
      </WorkDetailsOtherWorksContent>
    </aside>
  );
}

export default WorkDetailsOtherWorks;
