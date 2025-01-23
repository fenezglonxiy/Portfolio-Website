import { css, Theme } from "@mui/material";

import { SerializedStyles } from "@mui/styled-engine";

import { InsightDetailsFeaturedBoxProps } from "./InsightDetailsFeaturedBox";

const getInsightDetailsFeaturedBoxVariantCss = (
  theme: Theme,
  variant: InsightDetailsFeaturedBoxProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<InsightDetailsFeaturedBoxProps["variant"]>,
    SerializedStyles
  > = {
    block: css`
      padding-left: ${theme.spacing(8)};
      border-left: 4px solid;
    `,

    filled: css`
      padding: ${theme.spacing(8)};
      border-radius: ${theme.shape["lg"]};
    `,
  };

  return cssByVariant[
    variant as NonNullable<InsightDetailsFeaturedBoxProps["variant"]>
  ];
};

const getInsightDetailsFeaturedBoxColorCss = (
  theme: Theme,
  variant: InsightDetailsFeaturedBoxProps["variant"],
  color: InsightDetailsFeaturedBoxProps["color"]
) => {
  const cssByVariantColor: Record<
    NonNullable<InsightDetailsFeaturedBoxProps["variant"]>,
    Record<
      NonNullable<InsightDetailsFeaturedBoxProps["color"]>,
      SerializedStyles
    >
  > = {
    block: {
      "royal-blue": css`
        border-color: ${theme.palette.indigo[600]};
        color: ${theme.palette.slate[800]};
      `,

      zircon: css`
        border-color: ${theme.palette.indigo[50]};
        color: ${theme.palette.slate[600]};
      `,
    },
    filled: {
      "royal-blue": css`
        background-color: ${theme.palette.indigo[600]};
        color: ${theme.palette.slate[800]};
      `,

      zircon: css`
        background-color: ${theme.palette.indigo[50]};
        color: ${theme.palette.slate[600]};
      `,
    },
  };

  return cssByVariantColor[
    variant as NonNullable<InsightDetailsFeaturedBoxProps["variant"]>
  ][color as NonNullable<InsightDetailsFeaturedBoxProps["color"]>];
};

const getInsightDetailsFeaturedBoxCss = (
  theme: Theme,
  props: InsightDetailsFeaturedBoxProps
) => css`
  --flow-spacing-y: ${theme.spacing(6)};
  ${getInsightDetailsFeaturedBoxVariantCss(theme, props.variant)};
  ${getInsightDetailsFeaturedBoxColorCss(theme, props.variant, props.color)};
`;

export default getInsightDetailsFeaturedBoxCss;
