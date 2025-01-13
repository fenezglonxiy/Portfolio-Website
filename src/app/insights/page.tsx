import { InsightsHero } from "@/_pages/insights-hero";
import { InsightsShowcase } from "@/_pages/insights-showcase";
import { Metadata } from "next";

export const metadata: Metadata = {};

export default function Insights() {
  return (
    <>
      <InsightsHero />
      <InsightsShowcase />
    </>
  );
}
