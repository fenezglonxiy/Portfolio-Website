/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import getScrollerContentCss from "./getInfiniteScrollerContentCss";
import mergeRefs from "@/_utils/mergeRefs";
import { useIsomorphicLayoutEffect, useWindowSize } from "@/_hooks";
import { useInfiniteScrollerContext } from "./InfiniteScrollerContext";

type InfiniteScrollerContentBaseProps = {
  /**
   * If `true`, the scroller will stop scrolling when any item is hovered.
   */
  pauseWhenItemIsHovered?: boolean;

  /**
   * If `true`, the scroller will stop scrolling when any item is active.
   */
  pauseWhenItemIsActive?: boolean;

  /**
   * If `true`, the scroller will stop scrolling when any item is focus.
   */
  pauseWhenItemIsFocus?: boolean;

  /**
   * Control the scrolling speed in seconds.
   * @default 20
   */
  scrollingSpeed?: number;

  /**
   * Scroll in a left direction or right direction.
   * @default "left"
   */
  scrollingDirection?: "left" | "right";
};

export interface InfiniteScrollerContentTypeMap<
  D extends React.ElementType = "div"
> {
  props: InfiniteScrollerContentBaseProps;
  defaultComponent: D;
}

export type InfiniteScrollerContentProps<
  D extends React.ElementType = InfiniteScrollerContentTypeMap["defaultComponent"]
> = OverrideProps<InfiniteScrollerContentTypeMap<D>, D>;

const InfiniteScrollerContent = React.forwardRef(
  function InfiniteScrollerContent(
    props: InfiniteScrollerContentProps,
    ref: React.Ref<HTMLDivElement>
  ) {
    const {
      children,
      pauseWhenItemIsHovered,
      pauseWhenItemIsActive,
      pauseWhenItemIsFocus,
      scrollingSpeed = 20,
      scrollingDirection = "left",
      ...rest
    } = props;
    const componentRef = React.useRef<HTMLDivElement>(null);
    const { animated, infiniteScrollerElement } = useInfiniteScrollerContext();
    const { width } = useWindowSize();
    const [initialItems, setInitialItems] = React.useState<
      Element[] | undefined
    >();

    useIsomorphicLayoutEffect(() => {
      if (!(componentRef && componentRef.current)) {
        return;
      }

      const items = Array.from(componentRef.current.children);
      setInitialItems(items);
    }, [componentRef]);

    const addAnimation = (width: number) => {
      if (!(componentRef && componentRef.current && initialItems)) {
        return;
      }

      let componentWidth = componentRef.current.clientWidth;
      let itemCount = Array.from(componentRef.current.children).length;
      const duplicatedItemsWidth =
        initialItems[0].clientWidth * initialItems.length;

      for (
        let i = 1;
        !(itemCount % 2 == 0 && componentWidth >= 2 * width);
        i++
      ) {
        for (const item of initialItems) {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          componentRef.current.appendChild(duplicatedItem);
        }

        componentWidth += duplicatedItemsWidth;
        itemCount += initialItems.length;
      }
    };

    useIsomorphicLayoutEffect(() => {
      if (!infiniteScrollerElement) {
        return;
      }

      const resizeObserver = new ResizeObserver(() => {
        addAnimation(infiniteScrollerElement.clientWidth);
      });

      resizeObserver.observe(infiniteScrollerElement);

      return () => resizeObserver.disconnect();
    }, [infiniteScrollerElement]);

    useIsomorphicLayoutEffect(() => {
      if (infiniteScrollerElement || !width) {
        return;
      }

      addAnimation(width);
    }, [width]);

    const css = getScrollerContentCss(animated as boolean, {
      ...props,
      scrollingSpeed,
      scrollingDirection,
    });

    return (
      <div ref={mergeRefs(ref, componentRef)} css={css} {...rest}>
        {children}
      </div>
    );
  }
);

InfiniteScrollerContent.displayName = "InfiniteScrollerContent";

export default InfiniteScrollerContent;
