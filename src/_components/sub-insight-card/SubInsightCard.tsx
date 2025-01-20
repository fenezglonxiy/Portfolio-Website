/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import { Card } from "@/_components/Card";
import { VisuallyHidden } from "@/_components/visually-hidden";
import { InsightCardDetails } from "@/types";

import SubInsightCardMedia from "./SubInsightCardMedia";
import SubInsightCardContent from "./SubInsightCardContent";
import InsightPublishDate from "./InsightPublishDate";
import InsightTitle from "./InsightTitle";
import InsightSummary from "./InsightSummary";
import getSubInsightCardCss from "./getSubInsightCardCss";
import SubInsightCardText from "./SubInsightCardText";
import InsightTopic from "./InsightTopic";

export type SubInsightCardProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "color"
> &
  Pick<
    InsightCardDetails,
    | "thumbnailSrc"
    | "href"
    | "publishDate"
    | "readTime"
    | "title"
    | "summary"
    | "topic"
  >;

function SubInsightCard(props: SubInsightCardProps) {
  const {
    thumbnailSrc,
    href,
    publishDate,
    readTime,
    title,
    summary,
    topic,
    className,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getSubInsightCardCss(theme);

  return (
    <Card
      variant="fill"
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    >
      <VisuallyHidden href={href} label={title}>
        <SubInsightCardMedia component="img" src={thumbnailSrc} />
      </VisuallyHidden>

      <SubInsightCardContent>
        <VisuallyHidden href={href} label={title}>
          <SubInsightCardText>
            <InsightTitle>{title}</InsightTitle>

            <InsightSummary>{summary}</InsightSummary>
          </SubInsightCardText>
        </VisuallyHidden>

        <InsightTopic label={topic} />

        <InsightPublishDate date={publishDate} />
      </SubInsightCardContent>
    </Card>
  );
}

export default SubInsightCard;
