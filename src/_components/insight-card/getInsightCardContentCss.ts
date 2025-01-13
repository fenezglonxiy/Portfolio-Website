import { alpha, css, Theme } from "@mui/material";
import { InsightCardContentProps } from "./InsightCardContent";
import { SerializedStyles } from "@emotion/react";

const getInsightCardContentVariantCss = (
  theme: Theme,
  variant: InsightCardContentProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<InsightCardContentProps["variant"]>,
    SerializedStyles
  > = {
    base: css`
      gap: ${theme.spacing(2)};
    `,

    home: css`
      gap: ${theme.spacing(2)};

      && {
        padding: ${theme.spacing(8)} 0 0 0;
      }
    `,

    main: css`
      gap: ${theme.spacing(8)};
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 0;

      && {
        padding: ${theme.spacing(8)};
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: ${alpha(theme.palette.neutral[900], 0.6)};
        backdrop-filter: blur(2px);
        z-index: -1;
      }
    `,

    sub: css``,
  };

  return cssByVariant[
    variant as NonNullable<InsightCardContentProps["variant"]>
  ];
};

const getInsightCardContentCss = (
  theme: Theme,
  variant: InsightCardContentProps["variant"]
) => css`
  display: flex;
  flex-direction: column;
  ${getInsightCardContentVariantCss(theme, variant)};
`;

export default getInsightCardContentCss;
