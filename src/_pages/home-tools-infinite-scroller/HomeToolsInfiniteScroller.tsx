import { ToolsInfiniteScroller } from "@/_components/tools-infinite-scroller";

import HomeToolsInfiniteScrollerContent from "./HomeToolsInfiniteScrollerContent";

type Props = Omit<React.ComponentPropsWithoutRef<"section">, "children">;

function HomeToolsInfiniteScroller(props: Props) {
  return (
    <section {...props}>
      <HomeToolsInfiniteScrollerContent>
        <ToolsInfiniteScroller />
      </HomeToolsInfiniteScrollerContent>
    </section>
  );
}

export default HomeToolsInfiniteScroller;
