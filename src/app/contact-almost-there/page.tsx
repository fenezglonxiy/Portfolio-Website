import { Metadata } from "next";

import { ContactAlmostThereHero } from "@/_pages/contact-almost-there-hero";

export const metadata: Metadata = {
  title: "Awesome, we're almost there!",
};

export default function ContactAlmostThere() {
  return (
    <>
      <ContactAlmostThereHero />
    </>
  );
}
