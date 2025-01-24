import { Typography } from "@/_components/Typography";
import { InsightCardDetails } from "@/types";

export type InsightPublishDateProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color"
> & {
  /**
   * The publish date of the insight.
   */
  date: InsightCardDetails["publishDate"];

  children?: undefined | null;
};

function InsightPublishDate(props: InsightPublishDateProps) {
  const { date, ...rest } = props;

  return (
    <Typography
      component="div"
      variant="caption"
      color="slate-600"
      fontWeight="regular"
      {...rest}
    >
      {date.format("MMM DD, YYYY")}
    </Typography>
  );
}

export default InsightPublishDate;
