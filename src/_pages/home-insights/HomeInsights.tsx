"use client";

import moment from "moment";

import { HomeInsightCard } from "@/_components/home-insight-card";

import HomeInsightsContent from "./HomeInsightsContent";
import HomeInsightsHeader from "./HomeInsightsHeader";
import HomeInsightsShowcase from "./HomeInsightsShowcase";

export type HomeInsightsProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

const insightCard = {
  href: "/",
  topic: "Test",
  tags: ["Test"],
  thumbnailSrc: "/insight-card-thumbnail.png",
  title:
    "The Power of Typography in Visual Design: Enhancing Communication and Impact",
  summary:
    "Dive into the fascinating world of color theory and learn how to create captivating visual designs by",
  publishDate: moment(),
};

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
