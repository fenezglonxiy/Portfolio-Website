"use client";

import { Typography } from "@/_components/Typography";
import { insightCard } from "@/dummyData";
import { SubInsightCard } from "@/_components/sub-insight-card";
import { Button } from "@/_components/Button";

import OtherInsightsContainer from "./OtherInsightsContainer";
import OtherInsightsContent from "./OtherInsightsContent";
import OtherInsightsShowcase from "./OtherInsightsShowcase";
import OtherInsightsCTABox from "./OtherInsightsCTABox";

export type OtherInsightsProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
>;

function OtherInsights(props: OtherInsightsProps) {
  return (
    <div {...props}>
      <OtherInsightsContent>
        <OtherInsightsContainer>
          <Typography component="h4" variant="h5" color="slate-800">
            Other Insights
          </Typography>

          <OtherInsightsShowcase>
            {Array(4)
              .fill(insightCard)
              .map((card, idx) => (
                <SubInsightCard
                  key={idx}
                  thumbnailSrc={card.thumbnailSrc}
                  href={card.href}
                  publishDate={card.publishDate}
                  readTime={card.readTime}
                  title={card.title}
                  summary={card.summary}
                  topic={card.topic}
                />
              ))}
          </OtherInsightsShowcase>

          <OtherInsightsCTABox>
            <Button
              href="/insights"
              color="indigo"
              shape="pill"
              iconPosition="end"
              icon={<i className="fa-duotone fa-regular fa-arrow-right"></i>}
            >
              View All Insights
            </Button>
          </OtherInsightsCTABox>
        </OtherInsightsContainer>
      </OtherInsightsContent>
    </div>
  );
}

export default OtherInsights;
