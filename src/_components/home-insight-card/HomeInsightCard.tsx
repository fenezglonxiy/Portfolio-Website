import { Card } from "@/_components/Card";
import { InsightCardDetails } from "@/types";

import HomeInsightCardContent from "./HomeInsightCardContent";
import HomeInsightCardMedia from "./HomeInsightCardMedia";
import InsightTitle from "./InsightTitle";
import InsightSummary from "./InsightSummary";

export type HomeInsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  Pick<InsightCardDetails, "href" | "thumbnailSrc" | "title" | "summary">;

function HomeInsightCard(props: HomeInsightCardProps) {
  const { href, thumbnailSrc, title, summary, ...rest } = props;

  return (
    <Card variant="fill" borderRadius="none" {...rest}>
      <HomeInsightCardMedia component="img" src={thumbnailSrc} />

      <HomeInsightCardContent>
        <InsightTitle href={href}>{title}</InsightTitle>

        <InsightSummary>{summary}</InsightSummary>
      </HomeInsightCardContent>
    </Card>
  );
}

export default HomeInsightCard;
