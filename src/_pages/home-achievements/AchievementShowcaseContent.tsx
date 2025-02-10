import {
  AchievementTimeline,
  AchievementTimelineProps,
} from "@/_components/achievement-timeline";

type Props = AchievementTimelineProps;

function AchievementShowcaseContent(props: AchievementTimelineProps) {
  return <AchievementTimeline {...props} />;
}

export default AchievementShowcaseContent;
