"use client";

import React from "react";

export type InfiniteScrollerContextValue = {
  /**
   * If a user has `prefers-reduced-motion: reduced`, there will be no
   * animation.
   *
   * If they have not opted for reduced-motion, the items will be duplicated
   * and the duplicated content will have `aria-hidden="true"` to prevent
   * duplicate content for screen readers.
   *
   * If a user has JS disabled or it fails for whatever reason, they will get
   * the same user experience as a user with `prefers-reduced-motion: reduced`.
   */
  animated?: boolean;

  /**
   * The reference to the scroller element or the root element.
   *
   * It is used to duplicate the items properly.
   */
  infiniteScrollerElement?: Element | null;
};

const InfiniteScrollerContext =
  React.createContext<InfiniteScrollerContextValue>({});

export const useInfiniteScrollerContext = (): InfiniteScrollerContextValue => {
  const value = React.useContext(InfiniteScrollerContext);
  return value;
};

export default InfiniteScrollerContext;
