import { Metadata } from "next";

import { NotFoundHero } from "@/_pages/not-found-hero";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return <NotFoundHero />;
}
