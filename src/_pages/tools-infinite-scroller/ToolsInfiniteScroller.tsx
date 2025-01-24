import {
  InfiniteScroller,
  InfiniteScrollerContent,
  InfiniteScrollerProps,
} from "@/_components/infinite-scroller";

import ToolInfiniteScrollerItem from "./ToolInfiniteScrollerItem";

export type ToolsInfiniteScrollerProps = InfiniteScrollerProps & {
  children?: undefined | null;
};

function ToolsInfiniteScroller(props: ToolsInfiniteScrollerProps) {
  return (
    <InfiniteScroller {...props}>
      <InfiniteScrollerContent>
        <ToolInfiniteScrollerItem
          toolImageSrc="/figma.png"
          toolImageAlt="figma"
        />
        <ToolInfiniteScrollerItem
          toolImageSrc="/greylock.png"
          toolImageAlt="greylock"
        />
        <ToolInfiniteScrollerItem
          toolImageSrc="/codecov.png"
          toolImageAlt="codecov"
        />
      </InfiniteScrollerContent>
    </InfiniteScroller>
  );
}

export default ToolsInfiniteScroller;
