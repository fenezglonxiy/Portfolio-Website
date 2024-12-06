import { css, Theme } from "@mui/material";
import { LinkProps } from "./Link";
import { TypographyProps } from "../Typography";
import { SerializedStyles } from "@mui/styled-engine";

const getLinkColorCss = (theme: Theme, color: LinkProps["color"]) => {
  const cssByColor: Record<
    NonNullable<LinkProps["color"]>,
    SerializedStyles
  > = {
    primary: css`
      color: ${theme.palette.neutral[700]};
      text-decoration-color: ${theme.palette.neutral[700]};

      &:hover,
      &:focus {
        color: ${theme.palette.neutral[600]};
        text-decoration-color: ${theme.palette.neutral[600]};
      }
    `,

    secondary: css`
      color: ${theme.palette.common.white};
      text-decoration-color: ${theme.palette.common.white};

      &:hover,
      &:focus {
        color: ${theme.palette.neutral[450]};
        text-decoration-color: ${theme.palette.neutral[450]};
      }
    `,
  };

  return cssByColor[color as NonNullable<LinkProps["color"]>];
};

const getLinkUnderlineCss = (underline: LinkProps["underline"]) => css`
  ${underline === "always" &&
  css`
    text-decoration: underline;
  `};

  ${underline === "hover" &&
  css`
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `};

  ${underline === "active" && css``}
`;

const getLinkCss = (theme: Theme, props: LinkProps) => css`
  display: ${props.display};
  padding: 0;
  min-width: auto;
  min-height: auto;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: transparent;
  }

  ${theme.typography[props.variant as NonNullable<TypographyProps["variant"]>]};
  ${getLinkColorCss(theme, props.color)};
  ${getLinkUnderlineCss(props.underline)};
`;

export default getLinkCss;
