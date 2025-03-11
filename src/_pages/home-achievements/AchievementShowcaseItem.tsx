import {
  AchievementTimelineContent,
  AchievementTimelineDate,
  AchievementTimelineDot,
  AchievementTimelineItem,
  AchievementTimelineItemProps,
  AchievementTimelineReferenceLink,
  AchievementTimelineSeparator,
  AchievementTimelineTitle,
} from "@/_components/achievement-timeline";
import { Achievement } from "@/types";

type Props = Omit<AchievementTimelineItemProps, "children"> & {
  metadata: Achievement;
};

function AchievementShowcaseItem(props: Props) {
  const { metadata, ...rest } = props;

  return (
    <AchievementTimelineItem {...rest}>
      <AchievementTimelineSeparator>
        <AchievementTimelineDot
          svgHref={metadata.svgHref}
          svgWidth={metadata.svgWidth}
          svgHeight={metadata.svgHeight}
        />
      </AchievementTimelineSeparator>

      <AchievementTimelineContent>
        <AchievementTimelineTitle>{metadata.title}</AchievementTimelineTitle>

        <AchievementTimelineDate
          achievementDate={metadata.achievementDate}
          expiryDate={metadata.expiryDate}
        />
      </AchievementTimelineContent>

      {metadata.referenceHref && (
        <AchievementTimelineReferenceLink href={metadata.referenceHref} />
      )}
    </AchievementTimelineItem>
  );
}

export default AchievementShowcaseItem;
