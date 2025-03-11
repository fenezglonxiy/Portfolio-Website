import {
  AchievementTimeline,
  AchievementTimelineProps,
} from "@/_components/achievement-timeline";

type Props = AchievementTimelineProps;

function AchievementShowcaseContent(props: Props) {
  return <AchievementTimeline {...props} />;
}

export default AchievementShowcaseContent;
