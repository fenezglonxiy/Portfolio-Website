import { Metadata } from "next";

import { InsightDetailsContent } from "@/_pages/insight-details-content";

export const metadata: Metadata = {};

export default function InsightDetails() {
  return (
    <article>
      <InsightDetailsContent />
    </article>
  );
}
