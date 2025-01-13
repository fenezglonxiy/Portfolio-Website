/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightPublishInfo from "./getInsightPublishInfo";
import InsightPublishDate from "../InsightPublishDate";
import InsightCardReadMore from "../InsightCardReadMore";
import { InsightCardDetails } from "../types";

export type InsightPublishInfoProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * A URL or path to navigate to the insight details page.
   */
  detailsPageHref: InsightCardDetails["href"];

  /**
   * The publish date of the insight.
   */
  publishDate: InsightCardDetails["publishDate"];
};

function InsightPublishInfo(props: InsightPublishInfoProps) {
  const { detailsPageHref, publishDate, ...rest } = props;
  const theme = useTheme();
  const css = getInsightPublishInfo(theme);

  return (
    <div css={css} {...rest}>
      <div>
        <InsightCardReadMore href={detailsPageHref} variant="main" />
      </div>

      <div>
        <InsightPublishDate date={publishDate} variant="main" />
      </div>
    </div>
  );
}

export default InsightPublishInfo;
