/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import {
  InfiniteScrollerItem,
  InfiniteScrollerItemProps,
} from "@/_components/infinite-scroller";

import getToolInfiniteScrollerItemCss from "./getToolInfiniteScrollerItemCss";

export type ToolInfiniteScrollerItemProps = InfiniteScrollerItemProps;

function ToolInfiniteScrollerItem(props: ToolInfiniteScrollerItemProps) {
  const theme = useTheme();
  const css = getToolInfiniteScrollerItemCss(theme);

  return <InfiniteScrollerItem css={css} {...props} />;
}

export default ToolInfiniteScrollerItem;
