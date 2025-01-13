import { css, Theme } from "@mui/material";

import { InsightCardMediaProps } from "./InsightCardMedia";
import { SerializedStyles } from "@emotion/react";

const getInsightCardMediaVariantCss = (
  theme: Theme,
  variant: InsightCardMediaProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<InsightCardMediaProps["variant"]>,
    SerializedStyles
  > = {
    base: css`
      height: 220px;
    `,

    home: css`
      padding-bottom: 110%;
      position: relative;

      & > * {
        position: absolute;
      }
    `,

    main: css`
      height: 696px;
    `,

    sub: css``,
  };

  return cssByVariant[variant as NonNullable<InsightCardMediaProps["variant"]>];
};

const getInsightCardMediaCss = (
  theme: Theme,
  variant: InsightCardMediaProps["variant"]
) => css`
  ${getInsightCardMediaVariantCss(theme, variant)};
`;

export default getInsightCardMediaCss;
