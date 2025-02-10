import { Typography } from "@/_components/Typography";

export type SideDetailsSectionTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h4">,
  "color"
>;

function SideDetailsSectionTitle(props: SideDetailsSectionTitleProps) {
  return (
    <Typography
      component="h4"
      variant="body1Medium"
      color="neutral-900"
      fontWeight="semi-bold"
      {...props}
    />
  );
}

export default SideDetailsSectionTitle;
