import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Button, ButtonProps } from "@/_components/Button";

type PaginationLinkBaseProps = ButtonProps & {
  /**
   * Control whether the link is active.
   */
  isActive?: boolean;

  /**
   * A URL or path to navigate to the page.
   */
  href: ButtonProps["href"];
};

export interface PaginationLinkTypeMap<D extends React.ElementType = "button"> {
  props: PaginationLinkBaseProps;
  defaultComponent: D;
}

export type PaginationLinkProps<
  D extends React.ElementType = PaginationLinkTypeMap["defaultComponent"]
> = OverrideProps<PaginationLinkTypeMap<D>, D>;

const PaginationLink = React.forwardRef(function PaginationLink(
  props: PaginationLinkProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { isActive, ...rest } = props;

  return (
    <Button ref={ref} aria-current={isActive ? "page" : undefined} {...rest} />
  );
});

PaginationLink.displayName = "PaginationLink";

export default PaginationLink;
