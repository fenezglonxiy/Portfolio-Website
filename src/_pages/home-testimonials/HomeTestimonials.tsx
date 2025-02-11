/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { TestimonialCarousel } from "@/_components/testimonial-carousel";

import getHomeTestimonialsCss from "./getHomeTestimonialsCss";
import HomeTestimonialsContent from "./HomeTestimonialsContent";

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

type Props = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

function HomeTestimonials(props: Props) {
  const theme = useTheme();
  const css = getHomeTestimonialsCss(theme);

  return (
    <section css={css} {...props}>
      <HomeTestimonialsContent>
        <TestimonialCarousel testimonials={testimonials} />
      </HomeTestimonialsContent>
    </section>
  );
}

export default HomeTestimonials;
