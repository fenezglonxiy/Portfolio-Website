/** @jsxImportSource @emotion/react */

import { CardContentBox } from "@/_components/Card";

import getTestimonialOrganizationLogoCss from "./getTestimonialCardOrganizationLogoCss";

export type TestimonialCardOrganizationLogoProps = {
  /**
   * The source of the organization where the endorser works at.
   */
  src: string;
};

function TestimonialCardOrganizationLogo(
  props: TestimonialCardOrganizationLogoProps
) {
  const { src, ...rest } = props;
  const css = getTestimonialOrganizationLogoCss();

  return (
    <CardContentBox css={css}>
      <img src={src} alt="testimonial endorser avatar" {...rest} />
    </CardContentBox>
  );
}

export default TestimonialCardOrganizationLogo;
