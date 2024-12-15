import React from "react";
import { Card } from "../Card";
import TestimonialCardContent from "./TestimonialCardContent";
import TestimonialCardEndorserOverview, {
  TestimonialEndorserOverview,
} from "./TestimonialCardEndorserOverview";
import TestimonialCardQuote, { TestimonialQuote } from "./TestimonialCardQuote";

export type TestimonialCardDetails = {
  /**
   * The testimonial quote.
   */
  quote: TestimonialQuote;

  /**
   * The source of endorser avatar.
   */
  endorserAvatarSrc?: TestimonialEndorserOverview["avatarSrc"];

  /**
   * The endorser name.
   */
  endorserName: TestimonialEndorserOverview["name"];

  /**
   * The endorser job title.
   * @default "client"
   */
  endorserTitle?: TestimonialEndorserOverview["title"];

  /**
   * The organization where the endorser works at.
   */
  endorserOrganization?: string;

  /**
   * The source of the logo of the organization where the endorser works at.
   */
  endorserOrganizationLogoSrc?: string;
};

export type TestimonialCardProps = React.ComponentPropsWithoutRef<"div"> &
  TestimonialCardDetails & {
    children?: undefined | null;
  };

function TestimonialCard(props: TestimonialCardProps) {
  const {
    quote,
    endorserName,
    endorserAvatarSrc,
    endorserOrganization,
    endorserOrganizationLogoSrc,
    endorserTitle = "client",
    ...rest
  } = props;

  return (
    <Card variant="outlined" {...rest}>
      <TestimonialCardContent>
        <TestimonialCardQuote>{quote}</TestimonialCardQuote>

        <TestimonialCardEndorserOverview
          name={endorserName}
          title={endorserTitle}
          avatarSrc={endorserAvatarSrc}
          organization={endorserOrganization}
          organizationLogoSrc={endorserOrganizationLogoSrc}
        />
      </TestimonialCardContent>
    </Card>
  );
}

export default TestimonialCard;
