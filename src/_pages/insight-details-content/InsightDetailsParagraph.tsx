import { Typography } from "@/_components/Typography";

export type InsightDetailsParagraphProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function InsightDetailsParagraph(props: InsightDetailsParagraphProps) {
  return (
    <Typography
      variant="body1Medium"
      fontWeight="regular"
      color="slate-600"
      {...props}
    />
  );
}

export default InsightDetailsParagraph;
