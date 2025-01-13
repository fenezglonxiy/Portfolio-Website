import React from "react";

import { Typography } from "@/_components/Typography";

export type TestimonialQuote = string;

export type TestimonialCardQuoteProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
> & {
  children: TestimonialQuote;
};

function TestimonialCardQuote(props: TestimonialCardQuoteProps) {
  const { children, ...rest } = props;

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
