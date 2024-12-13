import { Box } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

type InfiniteScrollerItemBaseProps = {};

export interface InfiniteScrollerItemTypeMap<
  D extends React.ElementType = "div"
> {
  props: InfiniteScrollerItemBaseProps;
  defaultComponent: D;
}

export type InfiniteScrollerItemProps<
  D extends React.ElementType = InfiniteScrollerItemTypeMap["defaultComponent"]
> = OverrideProps<InfiniteScrollerItemTypeMap<D>, D> & {
  component?: React.ElementType;
};

const InfiniteScrollerItem = React.forwardRef(function InfiniteScrollerItem(
  props: InfiniteScrollerItemProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { component = "div", ...rest } = props;

  return <Box ref={ref} component={component} {...rest} />;
});

InfiniteScrollerItem.displayName = "InfiniteScrollerItem";

export default InfiniteScrollerItem;
