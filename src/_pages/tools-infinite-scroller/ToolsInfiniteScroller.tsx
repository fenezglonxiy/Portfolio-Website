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
  const dirPath = "/img/tools/";
  const tools = [
    {
      name: "nextjs",
      imageSrc: `${dirPath}nextjs.png`,
    },
    {
      name: "angular",
      imageSrc: `${dirPath}angular.png`,
    },
    {
      name: "figma",
      imageSrc: `${dirPath}figma.png`,
    },
    {
      name: "github",
      imageSrc: `${dirPath}github.png`,
    },
    {
      name: "jira",
      imageSrc: `${dirPath}jira.png`,
    },
  ];

  return (
    <InfiniteScroller {...props}>
      <InfiniteScrollerContent>
        {tools.map((tool) => (
          <ToolInfiniteScrollerItem key={tool.name}>
            <img src={tool.imageSrc} alt={tool.name} loading="lazy" />
          </ToolInfiniteScrollerItem>
        ))}
      </InfiniteScrollerContent>
    </InfiniteScroller>
  );
}

export default ToolsInfiniteScroller;
