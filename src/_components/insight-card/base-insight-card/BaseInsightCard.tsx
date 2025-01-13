/** @jsxImportSource @emotion/react */

"use client";

import { Card } from "@/_components/Card";
import { useTheme } from "@mui/material";

import getBaseInsightCardCss from "./getBaseInsightCardCss";
import InsightReadTime from "../InsightReadTime";
import InsightCardMedia from "../InsightCardMedia";
import InsightCardContent from "../InsightCardContent";
import InsightTitle from "../InsightTitle";
import InsightSummary from "../InsightSummary";
import InsightCardChip from "../InsightCardChip";
import InsightCardChipBox from "../InsightCardChipBox";
import { InsightCardDetails } from "../types";

export type BaseInsightCardProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "color"
> &
  Pick<
    InsightCardDetails,
    "href" | "thumbnailSrc" | "title" | "summary" | "readTime" | "topic"
  >;

function BaseInsightCard(props: BaseInsightCardProps) {
  const { href, thumbnailSrc, title, summary, readTime, topic, ...rest } =
    props;
  const theme = useTheme();
  const css = getBaseInsightCardCss(theme);

  return (
    <Card css={css} variant="fill" inverted {...rest}>
      <InsightCardMedia variant="base" component="img" src={thumbnailSrc} />

      <InsightReadTime>{`${readTime} read`}</InsightReadTime>

      <InsightCardContent variant="base">
        <InsightCardChipBox variant="base">
          <InsightCardChip variant="base" label={topic} />
        </InsightCardChipBox>

        <InsightTitle variant="base" href="/">
          {title}
        </InsightTitle>

        <InsightSummary>{summary}</InsightSummary>
      </InsightCardContent>
    </Card>
  );
}

export default BaseInsightCard;
