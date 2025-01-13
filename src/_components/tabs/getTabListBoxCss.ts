import { alpha, css, Theme } from "@mui/material";

import { TabListBoxProps } from "./TabListBox";

const getTabListBoxBorderColorCss = (
  theme: Theme,
  borderColor: TabListBoxProps["borderColor"]
) => {
  const borderColorValueByBorderColor: Record<
    NonNullable<TabListBoxProps["borderColor"]>,
    string
  > = {
    default: alpha(theme.palette.common.white, 0.12),
    slate: theme.palette.slate[300],
  };

  return css`
    border-color: ${borderColorValueByBorderColor[
      borderColor as NonNullable<TabListBoxProps["borderColor"]>
    ]};
  `;
};

const getTabListBoxCss = (theme: Theme, props: TabListBoxProps) => css`
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  ${getTabListBoxBorderColorCss(theme, props.borderColor)};
`;

export default getTabListBoxCss;
