import { css, Theme } from "@mui/material";
import { InsightTitleProps } from "./InsightTitle";
import { SerializedStyles } from "@emotion/react";

const getInsightTitleVariantCss = (
  theme: Theme,
  variant: InsightTitleProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<InsightTitleProps["variant"]>,
    SerializedStyles
  > = {
    main: css`
      ${theme.typography.h3};
      font-weight: ${theme.typography.fontWeightSemibold};
    `,

    base: css`
      ${theme.typography.subtitle2};
      font-weight: ${theme.typography.fontWeightSemibold};
    `,

    sub: css`
      ${theme.typography.subtitle2};
      font-weight: ${theme.typography.fontWeightSemibold};
    `,
  };

  return cssByVariant[variant as NonNullable<InsightTitleProps["variant"]>];
};

const getInsightTitleCss = (theme: Theme, props: InsightTitleProps) => css`
  ${getInsightTitleVariantCss(theme, props.variant)};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default getInsightTitleCss;
