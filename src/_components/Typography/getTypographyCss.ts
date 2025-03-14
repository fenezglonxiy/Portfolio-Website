import { css, Theme } from "@mui/material";

import { TypographyProps } from "./Typography";

const getTypographyColorCss = (
  theme: Theme,
  color: TypographyProps["color"]
) => {
  const typographyColorByColorFromProps: Record<
    NonNullable<TypographyProps["color"]>,
    string
  > = {
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
    "slate-50": theme.palette.slate[50],
    "slate-100": theme.palette.slate[100],
    "slate-200": theme.palette.slate[200],
    "slate-300": theme.palette.slate[300],
    "slate-400": theme.palette.slate[400],
    "slate-500": theme.palette.slate[500],
    "slate-600": theme.palette.slate[600],
    "slate-700": theme.palette.slate[700],
    "slate-800": theme.palette.slate[800],
    "slate-900": theme.palette.slate[900],
    "indigo-50": theme.palette.indigo[50],
    "indigo-100": theme.palette.indigo[100],
    "indigo-200": theme.palette.indigo[200],
    "indigo-300": theme.palette.indigo[300],
    "indigo-400": theme.palette.indigo[400],
    "indigo-500": theme.palette.indigo[500],
    "indigo-600": theme.palette.indigo[600],
    "indigo-700": theme.palette.indigo[700],
    "indigo-800": theme.palette.indigo[800],
    "indigo-900": theme.palette.indigo[900],
    white: theme.palette.common.white,
    error: theme.palette.error.main,
    inherit: "inherit",
  };

  return css`
    color: ${typographyColorByColorFromProps[
      color as NonNullable<TypographyProps["color"]>
    ]};
  `;
};

const getTypographyFontWeightCss = (
  theme: Theme,
  fontWeight: TypographyProps["fontWeight"]
) => {
  if (!fontWeight) {
    return undefined;
  }

  const fontWeightInt: Record<
    NonNullable<TypographyProps["fontWeight"]>,
    number
  > = {
    thin: Number(theme.typography.fontWeightThin?.toString() ?? 100),
    "extra-light": Number(
      theme.typography.fontWeightExtraLight?.toString() ?? 200
    ),
    light: Number(theme.typography.fontWeightLight?.toString() ?? 300),
    regular: Number(theme.typography.fontWeightRegular?.toString() ?? 400),
    medium: Number(theme.typography.fontWeightMedium?.toString() ?? 500),
    "semi-bold": Number(theme.typography.fontWeightSemibold?.toString() ?? 600),
    bold: Number(theme.typography.fontWeightBold?.toString() ?? 700),
    "extra-bold": Number(
      theme.typography.fontWeightExtraBold?.toString() ?? 800
    ),
    black: Number(theme.typography.fontWeightBlack?.toString() ?? 900),
  };

  return css`
    font-weight: ${fontWeightInt[fontWeight]};
  `;
};

const getTypographyTextOverflowCss = (
  lineClamp: TypographyProps["lineClamp"]
) =>
  lineClamp &&
  css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineClamp};
  `;

const getTypographyCss = (theme: Theme, props: TypographyProps) => css`
  display: ${props.display};
  text-align: ${props.align};
  text-transform: ${props.transform};
  ${getTypographyColorCss(theme, props.color)};
  ${getTypographyFontWeightCss(theme, props.fontWeight)};
  ${getTypographyTextOverflowCss(props.lineClamp)};
`;

export default getTypographyCss;
