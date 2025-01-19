"use client";

import { InsightCardDetails } from "@/types";

import { Card } from "@/_components/Card";

import InsightPublishInfo from "./InsightPublishInfo";
import MainInsightCardText from "./MainInsightCardText";
import MainInsightCardMedia from "./MainInsightCardMedia";
import MainInsightCardContent from "./MainInsightCardContent";
import InsightTitle from "./InsightTitle";
import InsightSummary from "./InsightSummary";
import InsightTagBox from "./InsightTagBox";
import InsightTag from "./InsightTag";
import MainInsightCardContentBox from "./MainInsightCardContextBox";
import MainInsightCardReadMore from "./MainInsightCardReadMore";
import InsightPublishDate from "./InsightPublishDate";

export type MainInsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  Pick<
    InsightCardDetails,
    "href" | "thumbnailSrc" | "title" | "summary" | "publishDate" | "tags"
  >;

function MainInsightCard(props: MainInsightCardProps) {
  const { href, thumbnailSrc, title, summary, publishDate, tags, ...rest } =
    props;

  return (
    <Card variant="elevation" borderRadius="lg" {...rest}>
      <MainInsightCardMedia component="img" src={thumbnailSrc} />

      <MainInsightCardContent>
        <MainInsightCardText>
          <InsightTitle href="/">{title}</InsightTitle>
          <InsightSummary>{summary}</InsightSummary>
        </MainInsightCardText>

        <MainInsightCardContentBox
          orientation="horizontal"
          flexGap={6}
          flexWrap="wrap"
          alignItems="center"
        >
          <InsightPublishInfo>
            <MainInsightCardReadMore href={href} />

            <InsightPublishDate date={publishDate} />
          </InsightPublishInfo>

          <InsightTagBox>
            {tags.map((label, idx) => (
              <InsightTag key={idx} label={label} />
            ))}
          </InsightTagBox>
        </MainInsightCardContentBox>
      </MainInsightCardContent>
    </Card>
  );
}

export default MainInsightCard;
