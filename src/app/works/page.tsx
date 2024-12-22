import { WorksHero } from "@/_pages/works-hero";
import { WorksShowcase } from "@/_pages/works-showcase";
import { WorksTestimonials } from "@/_pages/works-testimonials";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {};

export default function Works() {
  return (
    <React.Fragment>
      <WorksHero />
      <WorksShowcase />
      <WorksTestimonials />
    </React.Fragment>
  );
}
