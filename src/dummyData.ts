import moment from "moment";

import { Achievement } from "./types";
import { WorkCardDetails } from "./_components/work-card";
import { TestimonialCardDetails } from "./_components/testimonial-card";

export const workExperienceTimelineItem: Achievement = {
  svgHref: "google.svg#google",
  svgWidth: 24,
  svgHeight: 24,
  title: "Web developer at Google",
  date: moment("202402", "YYYYMM"),
  duration: moment.duration(moment().diff(moment("202402", "YYYYMM"))),
  referenceHref: "/",
};

export const awardTimelineItem: Achievement = {
  svgHref: "google.svg#google",
  svgWidth: 24,
  svgHeight: 24,
  title: "Web developer at Google",
  date: moment("202402", "YYYYMM"),
  referenceHref: "/",
};

export const workCard: WorkCardDetails = {
  thumbnailSrc: "card-thumbnail.png",
  workTitle: "Struktura",
  workBusinessSectors: ["Construction", "Test"],
  workStartDate: moment(),
  workDuration: moment.duration(2, "month"),
  workSummary:
    "This exploration centers on crafting an engaging layout, selecting an appealing color palette, and utilizing captivating imagery to enhance the overall user experience",
  workDetailsHref: "/",
};

export const testimonialCard: TestimonialCardDetails = {
  quote:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  endorserName: "Richard Jonas",
  endorserTitle: "CEO",
  endorserOrganization: "Teamwork",
  endorserOrganizationLogoSrc: "/teamwork.png",
};

export const insightCard = {
  href: "/",
  thumbnailSrc: "/insight-card-thumbnail.png",
  title:
    "The Power of Typography in Visual Design: Enhancing Communication and Impact",
  summary:
    "Dive into the fascinating world of color theory and learn how to create captivating visual designs by",
  readTime: "60min",
  publishDate: moment(),
  topic: "Business",
  tags: ["UI/UX", "Design System", "Sleep & Care"],
};
