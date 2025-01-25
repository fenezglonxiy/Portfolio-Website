import { alpha, css, tabClasses, tabsClasses, Theme } from "@mui/material";
import { SerializedStyles } from "@emotion/react";

import { TabListProps } from "./TabList";

const getTabListTextColorCss = (
  theme: Theme,
  textColor: TabListProps["textColor"]
) => {
  const cssByTextColor: Record<
    NonNullable<TabListProps["textColor"]>,
    SerializedStyles
  > = {
    inherit: css`
      color: inherit;
      opacity: 0.6;

      &.${tabClasses.selected} {
        opacity: 1;
      }
    `,

    primary: css`
      color: ${alpha(theme.palette.common.white, 0.7)};

      &.${tabClasses.selected} {
        color: ${theme.palette.primary.main};
      }
    `,

    secondary: css`
      color: ${alpha(theme.palette.common.white, 0.7)};

      &.${tabClasses.selected} {
        color: ${theme.palette.secondary.main};
      }
    `,

    slate: css`
      color: ${theme.palette.slate[600]};

      &.${tabClasses.selected} {
        color: ${theme.palette.slate[900]};
      }
    `,
  };

  return cssByTextColor[textColor as NonNullable<TabListProps["textColor"]>];
};

const getTabListIndicatorColorCss = (
  theme: Theme,
  indicatorColor: TabListProps["indicatorColor"]
) => {
  const cssByIndicatorColor: Record<
    NonNullable<TabListProps["indicatorColor"]>,
    SerializedStyles
  > = {
    primary: css`
      background-color: ${theme.palette.primary.main};
    `,

    secondary: css`
      background-color: ${theme.palette.secondary.main};
    `,

    indigo: css`
      background-color: ${theme.palette.indigo[600]};
    `,
  };

  return cssByIndicatorColor[
    indicatorColor as NonNullable<TabListProps["indicatorColor"]>
  ];
};

const getTabListCss = (theme: Theme, props: TabListProps) => css`
  & .${tabClasses.root} {
    font-weight: ${theme.typography.fontWeightMedium};
    ${getTabListTextColorCss(theme, props.textColor)};
  }

  & .${tabsClasses.indicator} {
    ${getTabListIndicatorColorCss(theme, props.indicatorColor)};
  }
`;

export default getTabListCss;
