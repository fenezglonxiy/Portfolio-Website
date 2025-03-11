"use client";

import { HomeInsightCard } from "@/_components/home-insight-card";
import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { insightCard } from "@/dummyData";

import HomeInsightsContent from "./HomeInsightsContent";
import HomeInsightsHeader from "./HomeInsightsHeader";
import HomeInsightsShowcase from "./HomeInsightsShowcase";
import HomeInsightsContainer from "./HomeInsightsContainer";
import HomeInsightsCTABox from "./HomeInsightsCTABox";
import HomeInsightsHeaderCTABox from "./HomeInsightsHeaderCTABox";

type Props = Omit<React.ComponentPropsWithoutRef<"section">, "children">;

function HomeInsights(props: Props) {
  return (
    <section {...props}>
      <HomeInsightsContent>
        <HomeInsightsContainer>
          <HomeInsightsHeader>
            <Typography variant="h3" color="neutral-800" fontWeight="semi-bold">
              Insights
            </Typography>

            <HomeInsightsHeaderCTABox>
              <Button href="/insights" variant="outlined" size="large">
                View All Insights
              </Button>
            </HomeInsightsHeaderCTABox>
          </HomeInsightsHeader>

          <HomeInsightsShowcase>
            {Array(3)
              .fill(insightCard)
              .map((card, idx) => (
                <HomeInsightCard
                  key={idx}
                  href={card.href}
                  thumbnailSrc={card.thumbnailSrc}
                  title={card.title}
                  summary={card.summary}
                />
              ))}
          </HomeInsightsShowcase>

          <HomeInsightsCTABox>
            <Button
              href="/insights"
              variant="outlined"
              size="medium"
              shape="pill"
              fullWidth
            >
              View All Insights
            </Button>
          </HomeInsightsCTABox>
        </HomeInsightsContainer>
      </HomeInsightsContent>
    </section>
  );
}

export default HomeInsights;
