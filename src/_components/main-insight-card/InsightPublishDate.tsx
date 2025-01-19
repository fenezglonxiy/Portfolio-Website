/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Calendar } from "@/_icons";
import { InsightCardDetails } from "@/types";

import getInsightPublishDateCss from "./getInsightPublishDateCss";

export type InsightPublishDateProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color"
> & {
  /**
   * The publish date of the insight.
   */
  date: InsightCardDetails["publishDate"];

  children?: undefined | null;
};

function InsightPublishDate(props: InsightPublishDateProps) {
  const { date, ...rest } = props;
  const theme = useTheme();
  const css = getInsightPublishDateCss(theme);

  return (
    <Typography
      component="div"
      variant="body1"
      color="white"
      fontWeight="bold"
      css={css}
      {...rest}
    >
      <span>
        <Calendar />
      </span>

      <span>{date.format("MMM DD, YYYY")}</span>
    </Typography>
  );
}

export default InsightPublishDate;
