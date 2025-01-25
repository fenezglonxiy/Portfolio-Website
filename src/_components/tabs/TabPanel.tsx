import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { useTabsContext } from "./TabsContext";

type TabPanelBaseProps = {
  /**
   * The value represents the `Tab`.
   */
  value: unknown;
};

export interface TabPanelTypeMap<D extends React.ElementType = "div"> {
  props: TabPanelBaseProps;
  defaultComponent: D;
}

export type TabPanelProps<
  D extends React.ElementType = TabPanelTypeMap["defaultComponent"]
> = OverrideProps<TabPanelTypeMap<D>, D> & { component?: React.ElementType };

const TabPanel = React.forwardRef(function (
  props: TabPanelProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { value, children, ...rest } = props;
  const tabsContext = useTabsContext(value);

  if (!tabsContext) {
    throw new Error("useTabsContext should be used within <Tabs>");
  }

  const { currentValue, tabPanelId, tabId } = tabsContext;

  return (
    <div
      ref={ref}
      role="tabpanel"
      hidden={value !== currentValue}
      id={tabPanelId}
      aria-labelledby={tabId}
      {...rest}
    >
      {value === currentValue && children}
    </div>
  );
});

TabPanel.displayName = "TabPanel";

export default TabPanel;
