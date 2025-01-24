/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import { ListItemIcon as MUIListItemIcon } from "@mui/material";
import React from "react";

import getListItemIconCss from "./getListItemIconCss";

type ListItemIconBaseProps = {};

export interface ListItemIconTypeMap<D extends React.ElementType = "div"> {
  props: ListItemIconBaseProps;
  defaultComponent: D;
}

export type ListItemIconProps<
  D extends React.ElementType = ListItemIconTypeMap["defaultComponent"]
> = OverrideProps<ListItemIconTypeMap<D>, D>;

const ListItemIcon = React.forwardRef(function ListItemIcon(
  props: ListItemIconProps,
  ref: React.Ref<HTMLDivElement>
) {
  const css = getListItemIconCss();

  return <MUIListItemIcon ref={ref} css={css} {...props} />;
});

ListItemIcon.displayName = "ListItemIcon";

export default ListItemIcon;
