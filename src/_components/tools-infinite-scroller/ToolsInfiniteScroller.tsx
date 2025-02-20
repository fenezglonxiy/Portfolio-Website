import {
  InfiniteScroller,
  InfiniteScrollerContent,
  InfiniteScrollerProps,
} from "@/_components/infinite-scroller";

import { Image } from "@/_components/image";

import ToolInfiniteScrollerItem from "./ToolInfiniteScrollerItem";

export type ToolsInfiniteScrollerProps = InfiniteScrollerProps & {
  children?: undefined | null;
};

const dirPath = "/img/tools/";

const tools = [
  {
    name: "nextjs",
    imageSrc: `${dirPath}nextjs.png`,
    width: 160,
    height: 97,
  },
  {
    name: "angular",
    imageSrc: `${dirPath}angular.png`,
    width: 160,
    height: 80,
  },
  {
    name: "figma",
    imageSrc: `${dirPath}figma.png`,
    width: 160,
    height: 31,
  },
  {
    name: "github",
    imageSrc: `${dirPath}github.png`,
    width: 160,
    height: 90,
  },
  {
    name: "jira",
    imageSrc: `${dirPath}jira.png`,
    width: 160,
    height: 44,
  },
];

function ToolsInfiniteScroller(props: ToolsInfiniteScrollerProps) {
  return (
    <InfiniteScroller {...props}>
      <InfiniteScrollerContent>
        {tools.map((tool) => (
          <ToolInfiniteScrollerItem key={tool.name}>
            <Image
              src={tool.imageSrc}
              alt={tool.name}
              width={tool.width}
              height={tool.height}
              loading="lazy"
            />
          </ToolInfiniteScrollerItem>
        ))}
      </InfiniteScrollerContent>
    </InfiniteScroller>
  );
}

export default ToolsInfiniteScroller;
