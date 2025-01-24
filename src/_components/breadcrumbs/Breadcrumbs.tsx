import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

type BreadcrumbsBaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;

  /**
   * Control the element used for the root node.
   *
   * @default "ol"
   */
  component?: "ul" | "ol";

  /**
   * Control the maximum number of breadcrumbs to display.
   * When there are more than the maximum number, only the first
   * `itemsBeforeCollapse` and the last `itemsAfterCollapse` will be shown,
   * with an ellipsis between.
   *
   * @default 8
   */
  maxItems?: number;

  /**
   * Control the number of breadcrumbs to show before the ellipsis when
   * `maxItems` is exceeded.
   *
   * @default 1
   */
  itemsBeforeCollapse?: number;

  /**
   * Control the number of breadcrumbs to show after the ellipsis when
   * `maxItems` is exceeded.
   *
   * @default 1
   */
  itemsAfterCollapse?: number;

  /**
   * The custom separator between breadcrumbs.
   */
  separator?: React.ReactNode;
};

export interface BreadcrumbsTypeMap<D extends React.ElementType = "ol"> {
  props: BreadcrumbsBaseProps;
  defaultComponent: D;
}

export type BreadcrumbsProps<
  D extends React.ElementType = BreadcrumbsTypeMap["defaultComponent"]
> = OverrideProps<BreadcrumbsTypeMap<D>, D>;

const Breadcrumbs = React.forwardRef(function Breadcrumbs(
  props: BreadcrumbsBaseProps,
  ref: React.Ref<HTMLOListElement>
) {
  const {
    component = "ol",
    maxItems = 8,
    itemsBeforeCollapse = 1,
    itemsAfterCollapse = 1,
    ...rest
  } = props;

  return (
    <MUIBreadcrumbs
      component={component}
      ref={ref}
      maxItems={maxItems}
      itemsBeforeCollapse={itemsBeforeCollapse}
      itemsAfterCollapse={itemsAfterCollapse}
      {...rest}
    />
  );
});

Breadcrumbs.displayName = "Breadcrumbs";

export default Breadcrumbs;
