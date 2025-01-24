import { CardContentBox } from "@/_components/Card";

export type WorkCardWorkOverviewProps = React.ComponentPropsWithoutRef<"div">;

function WorkCardWorkOverview(props: WorkCardWorkOverviewProps) {
  return <CardContentBox verticalSpacing={7} {...props} />;
}

export default WorkCardWorkOverview;
