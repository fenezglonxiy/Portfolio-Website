import { css, Theme } from "@mui/material";
import { DividerProps } from "./Divider";

const getDividerColorCss = (theme: Theme, color: DividerProps["color"]) => {
  const dividerColorByColorFromProps: Record<
    NonNullable<DividerProps["color"]>,
    string
  > = {
    inherit: "inherit",
    "neutral-100": theme.palette.neutral[100],
    "neutral-200": theme.palette.neutral[200],
    "neutral-250": theme.palette.neutral[250],
    "neutral-300": theme.palette.neutral[300],
    "neutral-350": theme.palette.neutral[350],
    "neutral-400": theme.palette.neutral[400],
    "neutral-450": theme.palette.neutral[450],
    "neutral-500": theme.palette.neutral[500],
    "neutral-550": theme.palette.neutral[550],
    "neutral-600": theme.palette.neutral[600],
    "neutral-650": theme.palette.neutral[650],
    "neutral-700": theme.palette.neutral[700],
    "neutral-750": theme.palette.neutral[750],
    "neutral-800": theme.palette.neutral[800],
    "neutral-850": theme.palette.neutral[850],
    "neutral-900": theme.palette.neutral[900],
  };

  return css`
    color: ${dividerColorByColorFromProps[
      color as NonNullable<DividerProps["color"]>
    ]};
  `;
};

const getDividerCss = (theme: Theme, props: DividerProps) => css`
  ${getDividerColorCss(theme, props.color)};
`;

export default getDividerCss;
