/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Calendar } from "@/_icons";

import { InsightCardDetails, InsightCardVariant } from "./types";
import getInsightPublishDateCss from "./main-insight-card/getInsightPublishDateCss";

export type InsightPublishDateProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color"
> & {
  /**
   * The publish date of the insight.
   */
  date: InsightCardDetails["publishDate"];

  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;

  children?: undefined | null;
};

function InsightPublishDate(props: InsightPublishDateProps) {
  const { date, variant = "base", ...rest } = props;
  const theme = useTheme();
  const css = getInsightPublishDateCss(theme);

  return (
    <Typography
      component="div"
      variant="body1"
      color="white"
      fontWeight={variant === "main" ? "bold" : "semi-bold"}
      css={css}
      {...rest}
    >
      {variant === "main" && (
        <span>
          <Calendar />
        </span>
      )}

      <span>{date.format("MMM DD, YYYY")}</span>
    </Typography>
  );
}

export default InsightPublishDate;
