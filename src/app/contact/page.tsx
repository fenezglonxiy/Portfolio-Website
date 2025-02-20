import { Metadata } from "next";

import { ContactHero } from "@/_pages/contact-hero";
import { ContactFormSection } from "@/_pages/contact-form-section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
