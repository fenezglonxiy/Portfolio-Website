import { css, Theme } from "@mui/material";
import { SerializedStyles } from "@emotion/react";

import { BadgeProps } from "./Badge";

const getBadgeColorCss = (theme: Theme, color: BadgeProps["color"]) => {
  const cssByColor: Record<
    NonNullable<BadgeProps["color"]>,
    SerializedStyles
  > = {
    default: css`
      --badge-background-color: transparent;
      --badge-color: ${theme.palette.common.white};
    `,

    primary: css`
      --badge-background-color: ${theme.palette.primary.main};
      --badge-color: ${theme.palette.common.white};
    `,

    secondary: css`
      --badge-background-color: ${theme.palette.secondary.main};
      --badge-color: ${theme.palette.common.white};
    `,

    info: css`
      --badge-background-color: ${theme.palette.info.main};
      --badge-color: ${theme.palette.common.white};
    `,

    warning: css`
      --badge-background-color: ${theme.palette.warning.main};
      --badge-color: ${theme.palette.common.white};
    `,

    error: css`
      --badge-background-color: ${theme.palette.error.main};
      --badge-color: ${theme.palette.common.white};
    `,

    success: css`
      --badge-background-color: ${theme.palette.success.main};
      --badge-color: ${theme.palette.common.white};
    `,

    indigo: css`
      --badge-background-color: ${theme.palette.indigo[50]};
      --badge-color: ${theme.palette.indigo[600]};
    `,
  };

  return cssByColor[color as NonNullable<BadgeProps["color"]>];
};

const getBadgeCss = (theme: Theme, props: BadgeProps) => css`
  background-color: var(--badge-background-color);
  color: var(--badge-color);
  ${getBadgeColorCss(theme, props.color)};
`;

export default getBadgeCss;
