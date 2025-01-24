import { Typography, TypographyProps } from "@/_components/Typography";

export type HomeAchievementsTypeProps = React.ComponentPropsWithoutRef<"h3"> & {
  /**
   * Control the variant of the typography.
   * @default "h5"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color of the typography.
   * @default "neutral-800"
   */
  color?: TypographyProps["color"];

  /**
   * Control the font-weight of the typography.
   * @default "semi-bold"
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
    color = "neutral-800",
    transform = "capitalize",
    fontWeight = "semi-bold",
    ...rest
  } = props;

  return (
    <Typography
      component="h3"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      transform={transform}
      {...rest}
    />
  );
}

export default HomeAchievementType;
