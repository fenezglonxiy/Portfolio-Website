/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import mergeRefs from "@/_utils/mergeRefs";

import getInfiniteScrollerCss from "./getInfiniteScrollerCss";
import InfiniteScrollerContext from "./InfiniteScrollerContext";

type InfiniteScrollerBaseProps = {};

export interface InfiniteScrollerTypeMap<D extends React.ElementType = "div"> {
  props: InfiniteScrollerBaseProps;
  defaultComponent: D;
}

export type InfiniteScrollerProps<
  D extends React.ElementType = InfiniteScrollerTypeMap["defaultComponent"]
> = OverrideProps<InfiniteScrollerTypeMap<D>, D>;

const InfiniteScroller = React.forwardRef(function InfiniteScroller(
  props: InfiniteScrollerProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { children, ...rest } = props;
  const componentRef = React.useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = React.useState(false);

  React.useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimated(true);
    }
  }, []);

  const css = getInfiniteScrollerCss(animated);

  return (
    <div
      ref={mergeRefs(ref, componentRef)}
      css={css}
      {...rest}
      data-animated={animated}
    >
      <InfiniteScrollerContext.Provider
        value={{
          animated: animated,
          infiniteScrollerElement: componentRef.current,
        }}
      >
        {children}
      </InfiniteScrollerContext.Provider>
    </div>
  );
});

InfiniteScroller.displayName = "InfiniteScroller";

export default InfiniteScroller;
