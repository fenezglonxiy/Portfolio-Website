/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import getTestimonialsCss from "./getTestimonialsCss";
import React from "react";
import TestimonialsContent from "./TestimonialsContent";
import { TestimonialCarousel } from "./testimonial-carousel";

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

export type TestimonialsProps = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

function Testimonials(props: TestimonialsProps) {
  const theme = useTheme();
  const css = getTestimonialsCss(theme);

  return (
    <section css={css} {...props}>
      <TestimonialsContent>
        <TestimonialCarousel testimonials={testimonials} />
      </TestimonialsContent>
    </section>
  );
}

export default Testimonials;
