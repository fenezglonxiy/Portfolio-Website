import { Card } from "@/_components/Card";

import BaseInsightCardContent from "./BaseInsightCardContent";
import BaseInsightCardMedia from "./BaseInsightCardMedia";
import { InsightCardDetails } from "../types";
import InsightTitle from "../InsightTitle";
import InsightSummary from "../InsightSummary";

export type BaseInsightCardProps = React.ComponentPropsWithoutRef<"div"> &
  InsightCardDetails;

function BaseInsightCard(props: BaseInsightCardProps) {
  const {
    href,
    thumbnailSrc,
    title,
    summary,
    publishedDate: _,
    ...rest
  } = props;

  return (
    <Card variant="fill" {...rest}>
      <BaseInsightCardMedia component="img" src={thumbnailSrc} />

      <BaseInsightCardContent>
        <InsightTitle href={href} variant="base">
          {title}
        </InsightTitle>

        <InsightSummary>{summary}</InsightSummary>
      </BaseInsightCardContent>
    </Card>
  );
}

export default BaseInsightCard;
