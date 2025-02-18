"use client";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { WorkCard } from "@/_components/work-card";
import { workCards } from "@/dummyData";

import HomeSelectedWorksContent from "./HomeSelectedWorksContent";
import HomeSelectedWorksHeader from "./HomeSelectedWorksHeader";
import SelectedWorksShowcase from "./SelectedWorksShowcase";
import HomeSelectedWorksContainer from "./HomeSelectedWorksContainer";
import HomeSelectedWorksCTABox from "./HomeSelectedWorksCTABox";
import HomeSelectedWorksHeaderCTABox from "./HomeSelectedWorksHeaderCTABox";

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

function HomeSelectedWorks(props: Props) {
  return (
    <section {...props}>
      <HomeSelectedWorksContent>
        <HomeSelectedWorksContainer>
          <HomeSelectedWorksHeader>
            <Typography variant="h3" fontWeight="semi-bold">
              Selected works
            </Typography>

            <HomeSelectedWorksHeaderCTABox>
              <Button
                href="/works"
                variant="outlined"
                color="primary"
                size="large"
              >
                View All Works
              </Button>
            </HomeSelectedWorksHeaderCTABox>
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

          <HomeSelectedWorksCTABox>
            <Button
              href="/works"
              variant="outlined"
              color="primary"
              size="medium"
              shape="pill"
              fullWidth
            >
              View All Works
            </Button>
          </HomeSelectedWorksCTABox>
        </HomeSelectedWorksContainer>
      </HomeSelectedWorksContent>
    </section>
  );
}

export default HomeSelectedWorks;
