import { Typography } from "@/_components/Typography";

export type InsightDetailsOverviewProps = React.PropsWithChildren;

function InsightDetailsOverview(props: InsightDetailsOverviewProps) {
  return (
    <Typography
      variant="subtitle2"
      fontWeight="medium"
      color="slate-600"
      {...props}
    />
  );
}

export default InsightDetailsOverview;
