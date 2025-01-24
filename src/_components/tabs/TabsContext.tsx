import React from "react";

type TabsContextValue = {
  /**
   * The unique `id` attribute of `Tabs` component.
   */
  id: string;

  /**
   * The value represents the current selected `Tab`.
   */
  value: any;
};

const TabsContext = React.createContext<TabsContextValue>(
  {} as TabsContextValue
);

export const useTabsContext = (
  tabValue: any
): {
  currentValue: string;
  tabId: string;
  tabPanelId: string;
} => {
  const { id, value } = React.useContext(TabsContext);
  const tabId = `${id}-${tabValue}-tab`;
  const tabPanelId = `${id}-${tabValue}-tabpanel`;

  return {
    currentValue: value,
    tabId,
    tabPanelId,
  };
};

export default TabsContext;
