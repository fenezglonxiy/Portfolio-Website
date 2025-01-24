/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { testimonialCard } from "@/dummyData";
import { TestimonialCarousel } from "@/_components/testimonial-carousel";

import WorksTestimonialsContent from "./WorksTestimonialsContent";
import getWorksTestimonialsCss from "./getWorksTestimonialsCss";

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
        <TestimonialCarousel testimonials={Array(3).fill(testimonialCard)} />
      </WorksTestimonialsContent>
    </section>
  );
}

export default WorksTestimonials;
