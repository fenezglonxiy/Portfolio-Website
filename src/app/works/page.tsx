import { Metadata } from "next";

import { WorksHero } from "@/_pages/works-hero";
import { WorksShowcase } from "@/_pages/works-showcase";

export const metadata: Metadata = {
  title: "Works",
};

export default function Works() {
  return (
    <>
      <WorksHero />
      <WorksShowcase />
    </>
  );
}
