import { css, Theme } from "@mui/material";
import { InsightSummaryProps } from "./InsightSummary";
import { SerializedStyles } from "@emotion/react";

const getInsightSummaryVariantCss = (
  theme: Theme,
  variant: InsightSummaryProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<InsightSummaryProps["variant"]>,
    SerializedStyles
  > = {
    home: css``,

    main: css`
      color: ${theme.palette.common.white};
    `,

    base: css`
      ${theme.typography.body1};
    `,

    sub: css``,
  };

  return cssByVariant[variant as NonNullable<InsightSummaryProps["variant"]>];
};

const getInsightSummaryCss = (theme: Theme, props: InsightSummaryProps) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  ${getInsightSummaryVariantCss(theme, props.variant)};
`;

export default getInsightSummaryCss;
