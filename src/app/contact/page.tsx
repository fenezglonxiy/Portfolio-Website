import { Metadata } from "next";

import { ContactHero } from "@/_pages/contact-hero";
import { ContactFormSection } from "@/_pages/contact-form-section";
import { PageTransitionPageWrapper } from "@/_pages/page-transition";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <PageTransitionPageWrapper>
      <ContactHero />
      <ContactFormSection />
    </PageTransitionPageWrapper>
  );
}
