import { Metadata } from "next";

import { WorksHero } from "@/_pages/works-hero";
import { WorksShowcase } from "@/_pages/works-showcase";
import { PageTransitionPageWrapper } from "@/_pages/page-transition";

export const metadata: Metadata = {
  title: "Works",
};

export default function Works() {
  return (
    <PageTransitionPageWrapper>
      <WorksHero />
      <WorksShowcase />
    </PageTransitionPageWrapper>
  );
}
