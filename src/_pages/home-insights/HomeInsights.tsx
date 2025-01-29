"use client";

import { HomeInsightCard } from "@/_components/home-insight-card";
import { insightCard } from "@/dummyData";

import HomeInsightsContent from "./HomeInsightsContent";
import HomeInsightsHeader from "./HomeInsightsHeader";
import HomeInsightsShowcase from "./HomeInsightsShowcase";

export type HomeInsightsProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

function HomeInsights(props: HomeInsightsProps) {
  return (
    <section {...props}>
      <HomeInsightsContent>
        <HomeInsightsHeader />

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
      </HomeInsightsContent>
    </section>
  );
}

export default HomeInsights;
