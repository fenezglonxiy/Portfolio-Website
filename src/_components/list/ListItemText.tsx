/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import { ListItemText as MUIListItemText, useTheme } from "@mui/material";
import React from "react";

import getListItemTextCss from "./getListItemTextCss";

type ListItemTextBaseProps = {
  /**
   * If `true`, the children are intended.
   */
  inset?: boolean;
};

export interface ListItemTextTypeMap<D extends React.ElementType = "div"> {
  props: ListItemTextBaseProps;
  defaultComponent: D;
}

export type ListItemTextProps<
  D extends React.ElementType = ListItemTextTypeMap["defaultComponent"]
> = OverrideProps<ListItemTextTypeMap<D>, D>;

const ListItemText = React.forwardRef(function ListItemText(
  props: ListItemTextProps,
  ref: React.Ref<HTMLDivElement>
) {
  const theme = useTheme();
  const css = getListItemTextCss(theme);

  return <MUIListItemText ref={ref} css={css} {...props} />;
});

ListItemText.displayName = "ListItemText";

export default ListItemText;
