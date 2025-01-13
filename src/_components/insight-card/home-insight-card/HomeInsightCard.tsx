import { Card } from "@/_components/Card";

import { InsightCardDetails } from "../types";
import InsightTitle from "../InsightTitle";
import InsightSummary from "../InsightSummary";
import InsightCardMedia from "../InsightCardMedia";
import InsightCardContent from "../InsightCardContent";

export type HomeInsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  Pick<InsightCardDetails, "href" | "thumbnailSrc" | "title" | "summary">;

function HomeInsightCard(props: HomeInsightCardProps) {
  const { href, thumbnailSrc, title, summary, ...rest } = props;

  return (
    <Card variant="fill" borderRadius="none" {...rest}>
      <InsightCardMedia variant="home" component="img" src={thumbnailSrc} />

      <InsightCardContent variant="home">
        <InsightTitle href={href} variant="home">
          {title}
        </InsightTitle>

        <InsightSummary variant="home">{summary}</InsightSummary>
      </InsightCardContent>
    </Card>
  );
}

export default HomeInsightCard;
