import { Typography, TypographyProps } from "@/_components/Typography";

export type MainDetailsSectionTitleProps =
  React.ComponentPropsWithoutRef<"h3"> & {
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
     */
    transform?: TypographyProps["transform"];
  };

function MainDetailsSectionTitle(props: MainDetailsSectionTitleProps) {
  const { variant = "h5", color = "neutral-900", ...rest } = props;

  return (
    <Typography component="h3" variant={variant} color={color} {...rest} />
  );
}

export default MainDetailsSectionTitle;
