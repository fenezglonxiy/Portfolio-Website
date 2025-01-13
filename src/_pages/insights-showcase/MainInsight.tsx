"use client";

import { InsightCard } from "@/_components/insight-card";
import { insightCard } from "@/dummyData";

export type MainInsightProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

function MainInsight(props: MainInsightProps) {
  return (
    <section {...props}>
      <InsightCard variant="main" {...insightCard} />
    </section>
  );
}

export default MainInsight;
