import React from "react";

import { InsightCardDetails, InsightCardVariant } from "./types";
import HomeInsightCard from "./home-insight-card/HomeInsightCard";
import MainInsightCard from "./main-insight-card/MainInsightCard";
import BaseInsightCard from "./base-insight-card/BaseInsightCard";

export type InsightCardProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> &
  InsightCardDetails & {
    /**
     * Control the variant of the card.
     * @default "base"
     */
    variant?: InsightCardVariant;
  };

function InsightCard(props: InsightCardProps) {
  const {
    href,
    thumbnailSrc,
    title,
    summary,
    readTime,
    publishDate,
    topic,
    tags,
    variant = "base",
    ...rest
  } = props;

  if (variant === "sub") {
  }

  if (variant === "home") {
    return (
      <HomeInsightCard
        href={href}
        thumbnailSrc={thumbnailSrc}
        title={title}
        summary={summary}
        {...rest}
      />
    );
  }

  if (variant === "main") {
    return (
      <MainInsightCard
        href={href}
        thumbnailSrc={thumbnailSrc}
        title={title}
        summary={summary}
        publishDate={publishDate}
        tags={tags}
        {...rest}
      />
    );
  }

  return (
    <BaseInsightCard
      href={href}
      thumbnailSrc={thumbnailSrc}
      title={title}
      summary={summary}
      readTime={readTime}
      topic={topic}
      {...rest}
    />
  );
}

export default InsightCard;
