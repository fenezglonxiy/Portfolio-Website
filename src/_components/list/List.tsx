import { OverrideProps } from "@mui/material/OverridableComponent";
import { List as MUIList } from "@mui/material";
import React from "react";

type ListBaseProps = {
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input
   * is used for the list and list items.
   */
  dense?: boolean;

  /**
   * If `true`, vertical padding is removed from the list.
   */
  disablePadding?: boolean;
};

export interface ListTypeMap<D extends React.ElementType = "ul"> {
  props: ListBaseProps;
  defaultComponent: D;
}

export type ListProps<
  D extends React.ElementType = ListTypeMap["defaultComponent"]
> = OverrideProps<ListTypeMap<D>, D> & { component?: React.ElementType };

const List = React.forwardRef(function List(
  props: ListProps,
  ref: React.Ref<HTMLUListElement>
) {
  return <MUIList ref={ref} {...props} />;
});

List.displayName = "List";

export default List;
