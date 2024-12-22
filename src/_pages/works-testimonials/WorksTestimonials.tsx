/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import { TestimonialCarousel } from "../../_components/testimonial-carousel";
import WorksTestimonialsContent from "./WorksTestimonialsContent";
import getWorksTestimonialsCss from "./getWorksTestimonialsCss";

const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    endorserName: "Richard Jonas",
    endorserTitle: "CEO",
    endorserOrganization: "Teamwork",
    endorserOrganizationLogoSrc: "/teamwork.png",
  },
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    endorserName: "Richard Jonas",
    endorserTitle: "CEO",
    endorserOrganization: "Teamwork",
    endorserOrganizationLogoSrc: "/teamwork.png",
  },
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    endorserName: "Richard Jonas",
    endorserTitle: "CEO",
    endorserOrganization: "Teamwork",
    endorserOrganizationLogoSrc: "/teamwork.png",
  },
];

export type WorksTestimonialsProps =
  React.ComponentPropsWithoutRef<"section"> & {
    children?: undefined | null;
  };

function WorksTestimonials(props: WorksTestimonialsProps) {
  const theme = useTheme();
  const css = getWorksTestimonialsCss(theme);

  return (
    <section css={css} {...props}>
      <WorksTestimonialsContent>
        <TestimonialCarousel testimonials={testimonials} />
      </WorksTestimonialsContent>
    </section>
  );
}

export default WorksTestimonials;
