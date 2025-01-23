import { OverrideProps } from "@mui/material/OverridableComponent";
import { ListItem as MUIListItem } from "@mui/material";
import React from "react";

type ListItemBaseProps = {
  /**
   * Control the `align-items` style property.
   */
  alignItems?: "center" | "flex-start";

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input
   * is used for the list item. This prop defaults to the value inherited from
   * the parent List component.
   */
  dense?: boolean;

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters?: boolean;

  /**
   * If `true`, all padding is removed.
   */
  disablePadding?: boolean;

  /**
   * The element to display at the end of the component.
   */
  secondaryAction?: React.ReactNode;
};

export interface ListItemTypeMap<D extends React.ElementType = "li"> {
  props: ListItemBaseProps;
  defaultComponent: D;
}

export type ListItemProps<
  D extends React.ElementType = ListItemTypeMap["defaultComponent"]
> = OverrideProps<ListItemTypeMap<D>, D> & { component?: React.ElementType };

const ListItem = React.forwardRef(function ListItem(
  props: ListItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  return <MUIListItem ref={ref} {...props} />;
});

ListItem.displayName = "ListItem";

export default ListItem;
