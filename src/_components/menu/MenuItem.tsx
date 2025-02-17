import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { MenuItem as MUIMenuItem } from "@mui/material";

type MenuItemBaseProps = {
  /**
   * If `true`, compact the vertical padding designed for keyboard and mouse
   * input is used. This prop defaults to the value inherited from the parent
   * Menu component.
   */
  dense?: boolean;

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters?: boolean;

  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   */
  divider?: boolean;

  /**
   * If `true`, the component is selected.
   */
  selected?: boolean;
};

export interface MenuItemTypeMap<D extends React.ElementType = "li"> {
  props: MenuItemBaseProps;
  defaultComponent: D;
}

export type MenuItemProps<
  D extends React.ElementType = MenuItemTypeMap["defaultComponent"]
> = OverrideProps<MenuItemTypeMap<D>, D>;

const MenuItem = React.forwardRef(function MenuItem(
  props: MenuItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  return <MUIMenuItem ref={ref} disableRipple {...props} />;
});

MenuItem.displayName = "MenuItem";

export default MenuItem;
