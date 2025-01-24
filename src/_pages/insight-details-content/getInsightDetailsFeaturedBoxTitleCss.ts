import { css, Theme } from "@mui/material";
import { SerializedStyles } from "@emotion/react";

import { InsightDetailsFeaturedBoxTitleProps } from "./InsightDetailsFeaturedBoxTitle";

const getInsightDetailsFeaturedBoxTitleColorCss = (
  theme: Theme,
  color: InsightDetailsFeaturedBoxTitleProps["color"]
) => {
  const hexCodeByColor: Record<
    NonNullable<InsightDetailsFeaturedBoxTitleProps["color"]>,
    string
  > = {
    zircon: theme.palette.indigo[50],
    "royal-blue": theme.palette.indigo[600],
  };

  return css`
    color: ${hexCodeByColor[
      color as NonNullable<InsightDetailsFeaturedBoxTitleProps["color"]>
    ]};
  `;
};

const getInsightDetailsFeaturedBoxTitleCss = (
  theme: Theme,
  props: InsightDetailsFeaturedBoxTitleProps
) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  ${getInsightDetailsFeaturedBoxTitleColorCss(theme, props.color)};
`;

export default getInsightDetailsFeaturedBoxTitleCss;
