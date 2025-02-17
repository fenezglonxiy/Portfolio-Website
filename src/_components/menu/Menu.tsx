import React from "react";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { Menu as MUIMenu } from "@mui/material";

import { Grow, TransitionProps } from "@/_components/transitions";

type MenuBaseProps = {
  /**
   * If `true`, the component is shown.
   */
  open: boolean;

  /**
   * The current anchor element, or a function returns the current anchor
   * element.
   */
  anchorEl?: Element | (() => Element) | null;

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to
   * `onClose`
   */
  onClose?: {
    bivarianceHack(event: {}, reason: "backdropClick" | "escapeKeyDown"): void;
  }["bivarianceHack"];

  /**
   * The variant to use.
   * Use `menu` to prevent selected items from impacting the initial focus.
   *
   * @default "menu"
   */
  variant?: "menu" | "selectedMenu";

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input
   * is used.
   */
  dense?: boolean;

  /**
   * The component used for the transition.
   *
   * @default Grow
   */
  TransitionComponent?: React.JSXElementConstructor<
    TransitionProps & {
      children: React.ReactElement<unknown, any>;
    }
  >;

  /**
   * The length of the transition in `ms` or 'auto'
   *
   * @default 'auto'
   */
  transitionDuration?:
    | "auto"
    | number
    | { appear?: number; enter?: number; exit?: number };
};

export interface MenuTypeMap<D extends React.ElementType = "div"> {
  props: MenuBaseProps;
  defaultComponent: D;
}

export type MenuProps<
  D extends React.ElementType = MenuTypeMap["defaultComponent"]
> = OverrideProps<MenuTypeMap<D>, D>;

const Menu = React.forwardRef(function Menu(
  props: MenuProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    variant = "menu",
    TransitionComponent = Grow,
    transitionDuration = "auto",
    ...rest
  } = props;

  return (
    <MUIMenu
      ref={ref}
      variant={variant}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
      {...rest}
    />
  );
});

Menu.displayName = "Menu";

export default Menu;
