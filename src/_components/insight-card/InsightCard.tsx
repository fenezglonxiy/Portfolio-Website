import React from "react";
import { InsightCardDetails, InsightCardVariant } from "./types";
import BaseInsightCard from "./base-insight-card/BaseInsightCard";

export type InsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  InsightCardDetails & {
    /**
     * Control the variant of the card.
     * @default "base"
     */
    variant?: InsightCardVariant;

    children?: undefined | null;
  };

function InsightCard(props: InsightCardProps) {
  const { variant = "base", ...rest } = props;

  if (variant === "sub") {
  }

  if (variant === "main") {
  }

  return <BaseInsightCard {...rest} />;
}

export default InsightCard;
