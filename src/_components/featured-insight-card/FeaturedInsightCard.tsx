"use client";

import { InsightCardDetails } from "@/types";

import { Card } from "@/_components/Card";
import { VisuallyHidden } from "@/_components/visually-hidden";

import FeaturedInsightCardText from "./FeaturedInsightCardText";
import FeaturedInsightCardMedia from "./FeaturedInsightCardMedia";
import FeaturedInsightCardContent from "./FeaturedInsightCardContent";
import InsightTitle from "./InsightTitle";
import InsightShortOverview from "./InsightShortOverview";
import InsightTagBox from "./InsightTagBox";
import InsightTag from "./InsightTag";
import FeaturedInsightCardContentBox from "./FeaturedInsightCardContextBox";
import InsightPublishDate from "./InsightPublishDate";

export type FeaturedInsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  Pick<
    InsightCardDetails,
    "href" | "thumbnailSrc" | "title" | "summary" | "publishDate" | "tags"
  >;

function FeaturedInsightCard(props: FeaturedInsightCardProps) {
  const { href, thumbnailSrc, title, summary, publishDate, tags, ...rest } =
    props;

  return (
    <Card variant="elevation" borderRadius="lg" {...rest}>
      <VisuallyHidden href={href} label={title}>
        <FeaturedInsightCardMedia component="img" src={thumbnailSrc} />
      </VisuallyHidden>

      <FeaturedInsightCardContent>
        <VisuallyHidden href={href} label={title}>
          <FeaturedInsightCardText>
            <InsightTitle>{title}</InsightTitle>
            <InsightShortOverview>{summary}</InsightShortOverview>
          </FeaturedInsightCardText>
        </VisuallyHidden>

        <FeaturedInsightCardContentBox
          orientation="horizontal"
          flexGap={6}
          flexWrap="wrap"
          alignItems="center"
        >
          <InsightPublishDate date={publishDate} />

          <InsightTagBox>
            {tags.map((label, idx) => (
              <InsightTag key={idx} label={label} />
            ))}
          </InsightTagBox>
        </FeaturedInsightCardContentBox>
      </FeaturedInsightCardContent>
    </Card>
  );
}

export default FeaturedInsightCard;
