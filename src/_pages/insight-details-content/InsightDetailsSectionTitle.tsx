import { Typography } from "@/_components/Typography";

export type InsightDetailsSectionTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h3">,
  "color"
>;

function InsightDetailsSectionTitle(props: InsightDetailsSectionTitleProps) {
  const { children } = props;

  if (!children) {
    return undefined;
  }

  return (
    <Typography component="h3" variant="h6" color="slate-800" {...props} />
  );
}

export default InsightDetailsSectionTitle;
