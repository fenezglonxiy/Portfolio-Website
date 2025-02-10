"use client";

import { HomeInsightCard } from "@/_components/home-insight-card";
import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { insightCard } from "@/dummyData";

import HomeInsightsContent from "./HomeInsightsContent";
import HomeInsightsHeader from "./HomeInsightsHeader";
import HomeInsightsShowcase from "./HomeInsightsShowcase";
import HomeInsightsContainer from "./HomeInsightsContainer";

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

            <div>
              <Button href="/insights" variant="outlined" size="large">
                View All Insights
              </Button>
            </div>
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
        </HomeInsightsContainer>
      </HomeInsightsContent>
    </section>
  );
}

export default HomeInsights;
