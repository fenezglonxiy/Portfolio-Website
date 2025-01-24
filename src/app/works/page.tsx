import { Metadata } from "next";

import { WorksHero } from "@/_pages/works-hero";
import { WorksShowcase } from "@/_pages/works-showcase";
import { WorksTestimonials } from "@/_pages/works-testimonials";

export const metadata: Metadata = {};

export default function Works() {
  return (
    <>
      <WorksHero />
      <WorksShowcase />
      <WorksTestimonials />
    </>
  );
}
