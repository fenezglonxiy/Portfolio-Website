/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import { ListItemButton as MUIListItemButton, useTheme } from "@mui/material";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import getListItemButtonCss from "./getListItemButtonCss";

type ListItemButtonBaseProps = {
  /**
   * Control the `align-items` style property.
   */
  alignItems?: "center" | "flex-start";

  /**
   * If `true`, the list item button is focused during the first mount. Focus
   * will also be triggered if the value changes from false to true.
   */
  autoFocus?: boolean;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input
   * is used for the list item button. This prop defaults to the value
   * inherited from the parent List component.
   */
  dense?: boolean;

  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;

  /**
   * If `true`, the left and right padding is disabled.
   */
  disableGutters?: boolean;

  /**
   * If `true`, a 1px light border is added to the bottom of the list item
   * button.
   */
  divider?: boolean;

  /**
   * A URL or path to navigate to. If defined, `<a>` is used as the root
   * element.
   */
  href?: Url;
};

export interface ListItemButtonTypeMap<D extends React.ElementType = "div"> {
  props: ListItemButtonBaseProps;
  defaultComponent: D;
}

export type ListItemButtonProps<
  D extends React.ElementType = ListItemButtonTypeMap["defaultComponent"]
> = OverrideProps<ListItemButtonTypeMap<D>, D>;

const ListItemButton = React.forwardRef(function ListItemButton(
  props: ListItemButtonProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { href, ...rest } = props;
  const theme = useTheme();
  const css = getListItemButtonCss(theme);

  const listItemButton = (
    <MUIListItemButton ref={ref} css={css} {...rest} disableRipple />
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        {listItemButton}
      </Link>
    );
  }

  return listItemButton;
});

ListItemButton.displayName = "ListItemButton";

export default ListItemButton;
