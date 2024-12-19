import { Achievement } from "@/types";
import { SvgIcon } from "../SvgIcon";
import { TimelineDot, TimelineDotProps } from "../timeline";

export type AchievementTimelineDotProps = TimelineDotProps & {
  /**
   * A URL or path to navigate to the svg icon or the svg image of the
   * achievement.
   */
  svgHref: Achievement["svgHref"];

  /**
   * The svg width.
   */
  svgWidth: Achievement["svgWidth"];

  /**
   * The svg height.
   */
  svgHeight: Achievement["svgHeight"];

  /**
   * Control the dot shape.
   * @default "sm"
   */
  shape?: TimelineDotProps["shape"];

  /**
   * Control the dot size.
   * @default "md"
   */
  size?: TimelineDotProps["size"];

  /**
   * Control the dot color.
   * @default "white"
   */
  color?: "white" | "philippine-silver";

  children?: undefined | null;
};

function AchievementTimelineDot(props: AchievementTimelineDotProps) {
  const {
    svgHref,
    svgWidth,
    svgHeight,
    shape = "sm",
    size = "md",
    color = "white",
    ...rest
  } = props;

  return (
    <TimelineDot shape={shape} size={size} color={color} {...rest}>
      <SvgIcon width={svgWidth} height={svgHeight}>
        <use xlinkHref={svgHref}></use>
      </SvgIcon>
    </TimelineDot>
  );
}

export default AchievementTimelineDot;
