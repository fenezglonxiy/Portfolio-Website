import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

type PaginationItemBaseProps = {};

export interface PaginationItemTypeMap<D extends React.ElementType = "li"> {
  props: PaginationItemBaseProps;
  defaultComponent: D;
}

export type PaginationItemProps<
  D extends React.ElementType = PaginationItemTypeMap["defaultComponent"]
> = OverrideProps<PaginationItemTypeMap<D>, D>;

const PaginationItem = React.forwardRef(function PaginationItem(
  props: PaginationItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  return <li ref={ref} {...props} />;
});

PaginationItem.displayName = "PaginationItem";

export default PaginationItem;
