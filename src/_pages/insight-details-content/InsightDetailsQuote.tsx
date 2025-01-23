import { Typography } from "@/_components/Typography";

export type InsightDetailsQuoteProps = React.PropsWithChildren;

function InsightDetailsQuote(props: InsightDetailsQuoteProps) {
  return (
    <Typography
      component="q"
      variant="h6"
      fontWeight="semi-bold"
      color="slate-800"
      {...props}
    />
  );
}

export default InsightDetailsQuote;
