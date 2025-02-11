import {
  AchievementTimelineContent,
  AchievementTimelineDate,
  AchievementTimelineItem,
  AchievementTimelineItemProps,
  AchievementTimelineReferenceLink,
  AchievementTimelineTitle,
} from "@/_components/achievement-timeline";
import { Achievement } from "@/types";

type Props = Omit<AchievementTimelineItemProps, "children"> & {
  metadata: Omit<Achievement, "svgHref" | "svgWidth" | "svgHeight">;
};

function AchievementShowcaseItem(props: Props) {
  const { metadata, ...rest } = props;

  return (
    <AchievementTimelineItem {...rest}>
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
