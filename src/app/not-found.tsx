import { Metadata } from "next";

import { NotFoundHero } from "@/_pages/not-found-hero";

export const metadata: Metadata = {};

export default function NotFound() {
  return <NotFoundHero />;
}
