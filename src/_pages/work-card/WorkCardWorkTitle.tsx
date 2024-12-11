import { Typography, TypographyProps } from "@/_components/Typography";

export type WorkCardWorkTitleProps = TypographyProps;

function WorkCardWorkTitle(props: WorkCardWorkTitleProps) {
  const { variant = "h6", color = "neutral-800", ...rest } = props;

  return <Typography variant={variant} color={color} {...rest} />;
}

export default WorkCardWorkTitle;
