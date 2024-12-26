import { Typography, TypographyProps } from "@/_components/Typography";

export type SideDetailsSectionTitleProps =
  React.ComponentPropsWithoutRef<"h4"> & {
    /**
     * Control the variant of the typography.
     * @default "body1Medium"
     */
    variant?: TypographyProps["variant"];

    /**
     * Control the color of the typography.
     * @default "neutral-900"
     */
    color?: TypographyProps["color"];

    /**
     * Control the font-weight of the typography.
     * @default "semi-bold"
     */
    fontWeight?: TypographyProps["fontWeight"];

    /**
     * Control the transformation of text.
     */
    transform?: TypographyProps["transform"];
  };

function SideDetailsSectionTitle(props: SideDetailsSectionTitleProps) {
  const {
    variant = "body1Medium",
    color = "neutral-900",
    fontWeight = "semi-bold",
    ...rest
  } = props;

  return (
    <Typography
      component="h4"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      {...rest}
    />
  );
}

export default SideDetailsSectionTitle;
