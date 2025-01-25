import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import useId from "@/_hooks/useId";

import TabsContext from "./TabsContext";

type TabsBaseProps = {
  /**
   * The value of the current selected `Tab`.
   */
  value: unknown;
};

export interface TabsTypeMap<D extends React.ElementType = "div"> {
  props: TabsBaseProps;
  defaultComponent: D;
}

export type TabsProps<
  D extends React.ElementType = TabsTypeMap["defaultComponent"]
> = OverrideProps<TabsTypeMap<D>, D>;

const Tabs = React.forwardRef(function Tabs(
  props: TabsProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { value, children, id: idFromProps, ...rest } = props;
  const id = useId(idFromProps);
  const tabsId = idFromProps ? idFromProps : id;

  return (
    <div ref={ref} id={tabsId} {...rest}>
      <TabsContext.Provider value={{ value, id }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
});

Tabs.displayName = "Tabs";

export default Tabs;
