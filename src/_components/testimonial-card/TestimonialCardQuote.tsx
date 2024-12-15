import React from "react";
import { Typography } from "../Typography";

export type TestimonialQuote = string;

export type TestimonialCardQuoteProps = React.ComponentPropsWithoutRef<"p"> & {
  children: TestimonialQuote;
};

function TestimonialCardQuote(props: TestimonialCardQuoteProps) {
  const { children, color: _, ...rest } = props;

  return (
    <Typography
      variant="subtitle2"
      fontWeight="medium"
      color="neutral-800"
      {...rest}
    >
      "{children}"
    </Typography>
  );
}

export default TestimonialCardQuote;
