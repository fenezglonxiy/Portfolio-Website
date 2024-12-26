"use client";

import moment from "moment";

import { InsightCard } from "@/_components/insight-card";

import HomeInsightsContent from "./HomeInsightsContent";
import HomeInsightsHeader from "./HomeInsightsHeader";
import HomeInsightsShowcase from "./HomeInsightsShowcase";

export type HomeInsightsProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

const insightCards = [
  {
    href: "/",
    thumbnailSrc: "/insight-card-thumbnail.png",
    title:
      "The Power of Typography in Visual Design: Enhancing Communication and Impact",
    summary:
      "Dive into the fascinating world of color theory and learn how to create captivating visual designs by",
    publishedDate: moment(),
  },
  {
    href: "/",
    thumbnailSrc: "/insight-card-thumbnail.png",
    title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
    summary:
      "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
    publishedDate: moment(),
  },
  {
    href: "/",
    thumbnailSrc: "/insight-card-thumbnail.png",
    title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
    summary:
      "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
    publishedDate: moment(),
  },
];

function HomeInsights(props: HomeInsightsProps) {
  return (
    <section {...props}>
      <HomeInsightsContent>
        <HomeInsightsHeader />

        <HomeInsightsShowcase>
          {insightCards.map((card, idx) => (
            <InsightCard key={idx} {...card} />
          ))}
        </HomeInsightsShowcase>
      </HomeInsightsContent>
    </section>
  );
}

export default HomeInsights;
