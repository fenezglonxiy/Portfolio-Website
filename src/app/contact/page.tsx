import { Metadata } from "next";

import ContactForm from "@/_pages/contact-form/ContactForm";
import { ContactHero } from "@/_pages/contact-hero";

export const metadata: Metadata = {};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
