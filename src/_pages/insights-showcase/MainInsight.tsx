"use client";

import { FeaturedInsightCard } from "@/_components/featured-insight-card";

import { insightCard } from "@/dummyData";

export type MainInsightProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

function MainInsight(props: MainInsightProps) {
  return (
    <section {...props}>
      <FeaturedInsightCard
        href={insightCard.href}
        thumbnailSrc={insightCard.thumbnailSrc}
        title={insightCard.title}
        summary={insightCard.summary}
        publishDate={insightCard.publishDate}
        tags={insightCard.tags}
      />
    </section>
  );
}

export default MainInsight;
