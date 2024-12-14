import { WorkCardContentBoxProps } from "./WorkCardContentBox";
import { CardContentBox } from "../Card";

export type WorkCardWorkOverviewProps = WorkCardContentBoxProps;

function WorkCardWorkOverview(props: WorkCardWorkOverviewProps) {
  return <CardContentBox verticalSpacing={7} {...props} />;
}

export default WorkCardWorkOverview;
