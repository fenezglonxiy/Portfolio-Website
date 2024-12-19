import { Typography, TypographyProps } from "@/_components/Typography";

export type HomeAchievementsTypeProps = React.ComponentPropsWithoutRef<"h3"> & {
  /**
   * Control the variant of the typography.
   * @default "h5"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color of the typography.
   * @default "neutral-900"
   */
  color?: TypographyProps["color"];

  /**
   * Control the font-weight of the typography.
   */
  fontWeight?: TypographyProps["fontWeight"];

  /**
   * Control the transformation of text.
   * @default "capitalize"
   */
  transform?: TypographyProps["transform"];
};

function HomeAchievementType(props: HomeAchievementsTypeProps) {
  const {
    variant = "h5",
    color = "neutral-900",
    transform = "capitalize",
    ...rest
  } = props;

  return (
    <Typography
      component="h3"
      variant={variant}
      color={color}
      transform={transform}
      {...rest}
    />
  );
}

export default HomeAchievementType;
