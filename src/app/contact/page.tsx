import ContactForm from "@/_pages/contact-form/ContactForm";
import { ContactHero } from "@/_pages/contact-hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {};

export default function Contact() {
  return (
    <React.Fragment>
      <ContactHero />
      <ContactForm />
    </React.Fragment>
  );
}
