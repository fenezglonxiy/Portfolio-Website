/** @jsxImportSource @emotion/react */

"use client";

import {
  InfiniteScrollerItem,
  InfiniteScrollerItemProps,
} from "@/_components/infinite-scroller";
import { useTheme } from "@mui/material";
import getToolInfiniteScrollerItemCss from "./getToolInfiniteScrollerItemCss";
import { Image } from "@/_components/image";

export type ToolInfiniteScrollerItemProps = InfiniteScrollerItemProps & {
  /**
   * Control the source of the tool's image.
   */
  toolImageSrc: string;

  /**
   * Control the alternative text of the tool's image.
   */
  toolImageAlt?: string;

  children?: undefined | null;
};

function ToolInfiniteScrollerItem(props: ToolInfiniteScrollerItemProps) {
  const { toolImageSrc, toolImageAlt, ...rest } = props;
  const theme = useTheme();
  const css = getToolInfiniteScrollerItemCss(theme);

  return (
    <InfiniteScrollerItem css={css} {...rest}>
      <Image src={toolImageSrc} alt={toolImageAlt ?? ""} loading="lazy" />
    </InfiniteScrollerItem>
  );
}

export default ToolInfiniteScrollerItem;
