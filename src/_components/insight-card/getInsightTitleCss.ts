import { css, Theme } from "@mui/material";
import { SerializedStyles } from "@emotion/react";

import { InsightTitleProps } from "./InsightTitle";

const getInsightTitleVariantCss = (
  theme: Theme,
  variant: InsightTitleProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<InsightTitleProps["variant"]>,
    SerializedStyles
  > = {
    home: css`
      ${theme.typography.subtitle2};
      font-weight: ${theme.typography.fontWeightSemibold};
      -webkit-line-clamp: 3;
    `,

    main: css`
      ${theme.typography.h6};
      color: ${theme.palette.common.white};

      &:hover,
      &:focus {
        color: ${theme.palette.neutral[400]};
      }
    `,

    base: css`
      ${theme.typography.subtitle2};
    `,

    sub: css`
      ${theme.typography.subtitle2};
      font-weight: ${theme.typography.fontWeightSemibold};
    `,
  };

  return cssByVariant[variant as NonNullable<InsightTitleProps["variant"]>];
};

const getInsightTitleCss = (theme: Theme, props: InsightTitleProps) => css`
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  ${getInsightTitleVariantCss(theme, props.variant)};
  font-weight: ${theme.typography.fontWeightBold};
`;

export default getInsightTitleCss;
