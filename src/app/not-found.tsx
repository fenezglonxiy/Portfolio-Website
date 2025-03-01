import { Metadata } from "next";

import { NotFoundHero } from "@/_pages/not-found-hero";
import { PageTransitionPageWrapper } from "@/_pages/page-transition";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <PageTransitionPageWrapper>
      <NotFoundHero />
    </PageTransitionPageWrapper>
  );
}
