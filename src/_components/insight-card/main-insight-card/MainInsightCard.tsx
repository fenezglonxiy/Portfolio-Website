"use client";

import { Card } from "@/_components/Card";

import { InsightCardDetails } from "../types";
import InsightTitle from "../InsightTitle";
import InsightSummary from "../InsightSummary";
import MainInsightCardText from "./MainInsightCardText";
import InsightCardContentBox from "../InsightCardContentBox";
import InsightPublishInfo from "./InsightPublishInfo";
import InsightCardMedia from "../InsightCardMedia";
import InsightCardContent from "../InsightCardContent";
import InsightCardChip from "../InsightCardChip";
import InsightCardChipBox from "../InsightCardChipBox";

export type MainInsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  Pick<
    InsightCardDetails,
    "href" | "thumbnailSrc" | "title" | "summary" | "publishDate" | "tags"
  >;

function MainInsightCard(props: MainInsightCardProps) {
  const { href, thumbnailSrc, title, summary, publishDate, tags, ...rest } =
    props;

  return (
    <Card borderRadius="lg" {...rest}>
      <InsightCardMedia variant="main" component="img" src={thumbnailSrc} />

      <InsightCardContent variant="main">
        <MainInsightCardText>
          <InsightTitle href="/" variant="main">
            {title}
          </InsightTitle>
          <InsightSummary variant="main">{summary}</InsightSummary>
        </MainInsightCardText>

        <InsightCardContentBox
          orientation="horizontal"
          flexGap={6}
          flexWrap="wrap"
          alignItems="center"
        >
          <InsightPublishInfo detailsPageHref="/" publishDate={publishDate} />

          <InsightCardChipBox variant="main">
            {tags.map((label, idx) => (
              <InsightCardChip key={idx} variant="main" label={label} />
            ))}
          </InsightCardChipBox>
        </InsightCardContentBox>
      </InsightCardContent>
    </Card>
  );
}

export default MainInsightCard;
