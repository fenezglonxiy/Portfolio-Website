import { ToolsInfiniteScroller } from "@/_components/tools-infinite-scroller";

type Props = Omit<React.ComponentPropsWithoutRef<"section">, "children">;

function AboutMeTools(props: Props) {
  return (
    <section {...props}>
      <ToolsInfiniteScroller />
    </section>
  );
}

export default AboutMeTools;
