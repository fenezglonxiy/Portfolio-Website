"use client";

// Import Swiper React components
import {
  Pagination,
  Swiper,
  SwiperProps,
  SwiperSlide,
} from "@/_components/swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { TestimonialCard } from "@/_components/testimonial-card";
import { TestimonialCardDetails } from "@/_components/testimonial-card";

import "./styles.css";

export type TestimonialCarouselProps = SwiperProps & {
  /**
   * Control the testimonial cards to display.
   */
  testimonials: TestimonialCardDetails[];

  children?: undefined | null;
};

function TestimonialCarousel(props: TestimonialCarouselProps) {
  const { testimonials, ...rest } = props;

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={40}
      modules={[Pagination]}
      {...rest}
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialCarousel;
