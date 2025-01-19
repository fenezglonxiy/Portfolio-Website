/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Card } from "@/_components/Card";
import { InsightCardDetails } from "@/types";

import getInsightCardCss from "./getInsightCardCss";
import InsightReadTime from "./InsightReadTime";
import InsightCardContent from "./InsightCardContent";
import InsightCardMedia from "./InsightCardMedia";
import InsightTitle from "./InsightTitle";
import InsightSummary from "./InsightSummary";
import InsightTopic from "./InsightTopic";

export type InsightCardProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "color"
> &
  Pick<
    InsightCardDetails,
    "href" | "thumbnailSrc" | "title" | "summary" | "readTime" | "topic"
  >;

function InsightCard(props: InsightCardProps) {
  const { href, thumbnailSrc, title, summary, readTime, topic, ...rest } =
    props;
  const theme = useTheme();
  const css = getInsightCardCss(theme);

  return (
    <Card css={css} variant="fill" inverted {...rest}>
      <InsightCardMedia component="img" src={thumbnailSrc} />

      <InsightReadTime>{`${readTime} read`}</InsightReadTime>

      <InsightCardContent>
        <InsightTopic label={topic} />

        <InsightTitle href="/">{title}</InsightTitle>

        <InsightSummary>{summary}</InsightSummary>
      </InsightCardContent>
    </Card>
  );
}

export default InsightCard;
