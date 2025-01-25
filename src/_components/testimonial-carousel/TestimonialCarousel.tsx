"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components
import {
  Keyboard,
  Pagination,
  Swiper,
  SwiperProps,
  SwiperSlide,
} from "@/_components/swiper";
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
      grabCursor={true}
      touchEventsTarget="container"
      mousewheel={true}
      keyboard={{
        enabled: true,
      }}
      modules={[Pagination, Keyboard]}
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
