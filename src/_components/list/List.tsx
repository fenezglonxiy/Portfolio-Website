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

  /**
   * The element used for the root node.
   *
   * @default "ul"
   */
  component?: "ul" | "ol";
};

export interface ListTypeMap<D extends React.ElementType = "ul"> {
  props: ListBaseProps;
  defaultComponent: D;
}

export type ListProps<
  D extends React.ElementType = ListTypeMap["defaultComponent"]
> = OverrideProps<ListTypeMap<D>, D>;

const List = React.forwardRef(function List(
  props: ListProps,
  ref: React.Ref<HTMLUListElement>
) {
  const { component = "ul", ...rest } = props;

  return <MUIList ref={ref} component={component} {...rest} />;
});

List.displayName = "List";

export default List;
