/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { useTheme } from "@mui/material";

import getTabListBoxCss from "./getTabListBoxCss";

type TabListBoxBaseProps = {
  /**
   * Control the color of the border on which the indicator slides.
   * @default "default"
   */
  borderColor?: "default" | "slate";
};

export interface TabListBoxTypeMap<D extends React.ElementType = "div"> {
  props: TabListBoxBaseProps;
  defaultComponent: D;
}

export type TabListBoxProps<
  D extends React.ElementType = TabListBoxTypeMap["defaultComponent"]
> = OverrideProps<TabListBoxTypeMap<D>, D>;

const TabListBox = React.forwardRef(function TabListBox(
  props: TabListBoxProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { borderColor = "default", ...rest } = props;
  const theme = useTheme();
  const css = getTabListBoxCss(theme, { ...props, borderColor });

  return <div ref={ref} css={css} {...rest} />;
});

TabListBox.displayName = "TabListBox";

export default TabListBox;
