/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { Tab as MUITab } from "@mui/material";
import { useTabsContext } from "./TabsContext";

type TabBaseProps = {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;

  /**
   * The label to render.
   */
  label: React.ReactNode;

  /**
   * The value represents the component.
   */
  value: any;

  /**
   * The icon to display.
   */
  icon?: React.ReactElement;

  /**
   * The position of the icon relative to the label.
   * @default "top"
   */
  iconPosition?: "top" | "bottom" | "start" | "end";

  /**
   * If `true`, the tab label is wrapped into a single row.
   */
  wrapped?: boolean;

  children?: undefined | null;
};

export interface TabTypeMap<D extends React.ElementType = "div"> {
  props: TabBaseProps;
  defaultComponent: D;
}

export type TabProps<
  D extends React.ElementType = TabTypeMap["defaultComponent"]
> = Omit<OverrideProps<TabTypeMap<D>, D>, "color">;

const Tab = React.forwardRef(function Tab(
  props: TabProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { iconPosition = "top", value, ...rest } = props;
  const { tabId, tabPanelId } = useTabsContext(value);

  return (
    <MUITab
      ref={ref}
      id={tabId}
      iconPosition={iconPosition}
      value={value}
      aria-controls={tabPanelId}
      disableRipple
      {...rest}
    />
  );
});

Tab.displayName = "Tab";

export default Tab;
