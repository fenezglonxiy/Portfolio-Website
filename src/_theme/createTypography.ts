import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import React from "react";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    fontWeightThin: React.CSSProperties["fontWeight"];
    fontWeightExtraLight: React.CSSProperties["fontWeight"];
    fontWeightExtraBold: React.CSSProperties["fontWeight"];
    fontWeightBlack: React.CSSProperties["fontWeight"];
    fontWeightSemibold: React.CSSProperties["fontWeight"];
  }
  interface TypographyOptions {
    fontWeightThin: React.CSSProperties["fontWeight"];
    fontWeightExtraLight: React.CSSProperties["fontWeight"];
    fontWeightExtraBold: React.CSSProperties["fontWeight"];
    fontWeightBlack: React.CSSProperties["fontWeight"];
    fontWeightSemibold: React.CSSProperties["fontWeight"];
  }

  interface FontStyle {
    fontWeightThin: React.CSSProperties["fontWeight"];
    fontWeightExtraLight: React.CSSProperties["fontWeight"];
    fontWeightExtraBold: React.CSSProperties["fontWeight"];
    fontWeightBlack: React.CSSProperties["fontWeight"];
    fontWeightSemibold: React.CSSProperties["fontWeight"];
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display: SerializedStyles;
    h1: SerializedStyles;
    h2: SerializedStyles;
    h3: SerializedStyles;
    h4: SerializedStyles;
    h5: SerializedStyles;
    h6: SerializedStyles;
    subtitle1: SerializedStyles;
    subtitle2: SerializedStyles;
    body1: SerializedStyles;
    body1Medium: SerializedStyles;
    body2: SerializedStyles;
    body2Medium: SerializedStyles;
    inherit: SerializedStyles;
    caption: SerializedStyles;
    button: undefined;
    overline: undefined;
  }

  interface TypographyVariantsOption {
    display: SerializedStyles;
    h1: SerializedStyles;
    h2: SerializedStyles;
    h3: SerializedStyles;
    h4: SerializedStyles;
    h5: SerializedStyles;
    h6: SerializedStyles;
    subtitle1: SerializedStyles;
    subtitle2: SerializedStyles;
    body1: SerializedStyles;
    body1Medium: SerializedStyles;
    body2: SerializedStyles;
    body2Medium: SerializedStyles;
    inherit: SerializedStyles;
    caption: SerializedStyles;
    button: undefined;
    overline: undefined;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    body1Medium: true;
    body2Medium: true;
    button: false;
    overline: false;
  }
}

export const fontFamily: React.CSSProperties["fontFamily"] = [
  "Inter Tight",
  "Arial",
  "sans-serif",
].join(", ");

type TypeFontWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

const fontWeightByType: Record<TypeFontWeight, number> = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  regular: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  black: 900,
} as const;

const display = css`
  font-size: 104px;
  line-height: 104px;
  letter-spacing: -2.08px;
  font-weight: ${fontWeightByType.bold};
`;

const h1 = css`
  font-size: 72px;
  line-height: 72px;
  letter-spacing: -1.44px;
  font-weight: ${fontWeightByType.bold};
`;

const h2 = css`
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -1.28px;
  font-weight: ${fontWeightByType.bold};
`;

const h3 = css`
  font-size: 52px;
  line-height: 67.6px;
  letter-spacing: -2.08px;
  font-weight: ${fontWeightByType.bold};
`;

const h4 = css`
  font-size: 44px;
  line-height: 57.2px;
  letter-spacing: -1.76px;
  font-weight: ${fontWeightByType.bold};
`;

const h5 = css`
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.6px;
  font-weight: ${fontWeightByType.bold};
`;

const h6 = css`
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -1.28px;
  font-weight: ${fontWeightByType.bold};
`;

const subtitle1 = css`
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.56px;
  font-weight: ${fontWeightByType["semi-bold"]};
`;

const subtitle2 = css`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.96px;
  font-weight: ${fontWeightByType["semi-bold"]};
`;

const body1 = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${fontWeightByType.regular};
`;

const body1Medium = css`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.4px;
  font-weight: ${fontWeightByType.medium};
`;

const body2 = css`
  font-size: 16px;
  line-height: 16px;
  font-weight: ${fontWeightByType.regular};
`;

const body2Medium = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
  font-weight: ${fontWeightByType.medium};
`;

const caption = css`
  font-size: 14px;
  line-height: 22.4px;
  letter-spacing: -0.14px;
  font-weight: ${fontWeightByType["semi-bold"]};
`;

const inherit = css`
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
`;

const typography = (theme: Theme): Typography => ({
  fontFamily: fontFamily,
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightThin: fontWeightByType.thin,
  fontWeightExtraLight: fontWeightByType["extra-light"],
  fontWeightLight: fontWeightByType.light,
  fontWeightRegular: fontWeightByType.regular,
  fontWeightMedium: fontWeightByType.medium,
  fontWeightSemibold: fontWeightByType["semi-bold"],
  fontWeightBold: fontWeightByType.bold,
  fontWeightExtraBold: fontWeightByType["extra-bold"],
  fontWeightBlack: fontWeightByType.black,
  display: display,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  subtitle1: subtitle1,
  subtitle2: subtitle2,
  body1: body1,
  body1Medium: body1Medium,
  body2: body2,
  body2Medium: body2Medium,
  caption: caption,
  inherit: inherit,
  pxToRem: theme.typography.pxToRem,
  button: undefined,
  overline: undefined,
});

export default typography;
