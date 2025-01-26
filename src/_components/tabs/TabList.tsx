/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { Tabs as MUITabs, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";

import getTabListCss from "./getTabListCss";
import { useTabsContext } from "./TabsContext";

declare module "@mui/material/Tabs" {
  interface TabsPropsIndicatorColorOverrides {
    indigo: true;
  }
}

type TabListBaseProps = {
  /**
   * Control additional display behavior of the tab list:
   *
   * * **`fullWidth`** will make all the tabs grow to use all the available
   * space.
   * * **`scrollable`** will invoke scrolling properties and allow for
   * horizontally scrolling (or swiping) of the tab bar.
   * * **`standard`** will render the default state.
   *
   * @default "standard"
   */
  variant?: "fullWidth" | "scrollable" | "standard";

  /**
   * The component orientation.
   *
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * If `true`, the tab list are centered.
   */
  centered?: boolean;

  /**
   * If `true`, the scrollbar is visible.
   */
  visibleScrollbar?: boolean;

  /**
   * If `true`, the selected tab changes on focus.
   * Otherwise, it only changes on activation.
   */
  selectionFollowsFocus?: boolean;

  /**
   * Control behavior of scroll buttons when tab list are set to scroll:
   *
   * * **auto** will only present them when not all tabs are visible.
   * * **true** will always present them.
   * * **false** will never present them.
   *
   * @default false
   */
  scrollButtons?: "auto" | boolean;

  /**
   * Control the color of the `Tab`.
   * @default "primary"
   */
  textColor?: "inherit" | "primary" | "secondary" | "slate";

  /**
   * Control the color of the indicator.
   * @default "primary"
   */
  indicatorColor?: "primary" | "secondary" | "indigo";

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   *
   * **Warning**: This is a generic event not a change event.
   */
  onChange?: (event: React.SyntheticEvent, value: unknown) => void;
};

export interface TabListTypeMap<D extends React.ElementType = "div"> {
  props: TabListBaseProps;
  defaultComponent: D;
}

export type TabListProps<
  D extends React.ElementType = TabListTypeMap["defaultComponent"]
> = OverrideProps<TabListTypeMap<D>, D> & { component?: React.ElementType };

const TabList = React.forwardRef(function Tabs(
  props: TabListProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    variant = "standard",
    orientation = "horizontal",
    scrollButtons = false,
    textColor = "primary",
    indicatorColor = "primary",
    ...rest
  } = props;
  const { currentValue } = useTabsContext(undefined);
  const theme = useTheme();
  const css = getTabListCss(theme, {
    ...props,
    variant,
    orientation,
    scrollButtons,
    textColor,
    indicatorColor,
  });

  return (
    <MUITabs
      ref={ref}
      css={css}
      value={currentValue}
      variant={variant}
      orientation={orientation}
      scrollButtons={scrollButtons}
      indicatorColor={indicatorColor}
      allowScrollButtonsMobile
      {...rest}
    />
  );
});

TabList.displayName = "TabList";

export default TabList;
