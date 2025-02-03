import { addMonths } from "date-fns";

import { Achievement, InsightCardDetails, WorkCardDetails } from "./types";
import { TestimonialCardDetails } from "./_components/testimonial-card";

export const workExperienceTimelineItem: Achievement = {
  svgHref: "google.svg#google",
  svgWidth: 24,
  svgHeight: 24,
  title: "Web developer at Google",
  achievementDate: new Date(2024, 1),
  referenceHref: "/",
};

export const awardTimelineItem: Achievement = {
  svgHref: "google.svg#google",
  svgWidth: 24,
  svgHeight: 24,
  title: "Web developer at Google",
  achievementDate: new Date(2024, 1),
  referenceHref: "/",
};

export const workCards: WorkCardDetails[] = [
  {
    mediaSrc: "card-thumbnail.png",
    workTitle: "Personal Website",
    workBusinessSectors: ["None"],
    workStartDate: new Date(2023, 11),
    workEndDate: new Date(),
    workSummary:
      "Developed an online space to show my work, skills, and experience and let others contact me for work.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/portfolio-website",
  },
  {
    mediaSrc: "card-thumbnail.png",
    workTitle: "English Tutor Webapp",
    workBusinessSectors: ["Education"],
    workStartDate: new Date(2022, 1),
    workEndDate: new Date(2022, 4),
    workSummary:
      "Developed a system that provides online one-on-one English tutoring services where students and tutors can join online classrooms and discuss topics under tutor guidance in English.",
    workServices: ["Web Design", "Web Development"],
    workDetailsHref: "/works/english-tutor-webapp",
  },
  {
    mediaSrc: "card-thumbnail.png",
    workTitle: "Video Calling Webapp",
    workBusinessSectors: ["None"],
    workStartDate: new Date(2022, 1),
    workEndDate: new Date(2022, 2),
    workSummary:
      "Developed a system where two users can join an online room, see each other through webcams, and talk to each other through microphones and headphones.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/video-calling-webapp",
  },
  {
    mediaSrc: "card-thumbnail.png",
    workTitle: "MyCoin Webapp",
    workBusinessSectors: ["Financial accounting"],
    workStartDate: new Date(2022, 1),
    workEndDate: new Date(2022, 2),
    workSummary:
      "Developed a system where users can authenticate using their keystore file, get coins by performing transactions, and send coins to another wallet.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/my-coin-webapp",
  },
];

export const testimonialCard: TestimonialCardDetails = {
  quote:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  endorserName: "Richard Jonas",
  endorserTitle: "CEO",
  endorserOrganization: "Teamwork",
  endorserOrganizationLogoSrc: "/teamwork.png",
};

export const insightCard: InsightCardDetails = {
  href: "/",
  thumbnailSrc: "/insight-card-thumbnail.png",
  title:
    "The Power of Typography in Visual Design: Enhancing Communication and Impact",
  summary:
    "Dive into the fascinating world of color theory and learn how to create captivating visual designs by",
  readTime: "60min",
  publishDate: new Date(),
  topic: "Business",
  tags: ["UI/UX", "Design System", "Sleep & Care"],
};

export const workShowcaseCards: WorkCardDetails[] = [
  {
    mediaSrc: "image.png",
    workTitle: "Personal Website",
    workBusinessSectors: ["None"],
    workStartDate: new Date(2023, 11),
    workEndDate: new Date(),
    workSummary:
      "Developed an online space to show my work, skills, and experience and let others contact me for work.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/portfolio-website",
  },
  {
    mediaSrc: "image.png",
    workTitle: "English Tutor Webapp",
    workBusinessSectors: ["Education"],
    workStartDate: new Date(2022, 1),
    workEndDate: new Date(2022, 4),
    workSummary:
      "Developed a system that provides online one-on-one English tutoring services where students and tutors can join online classrooms and discuss topics under tutor guidance in English.",
    workServices: ["Web Design", "Web Development"],
    workDetailsHref: "/works/english-tutor-webapp",
  },
  {
    mediaSrc: "image.png",
    workTitle: "Video Calling Webapp",
    workBusinessSectors: ["None"],
    workStartDate: new Date(2022, 1),
    workEndDate: new Date(2022, 2),
    workSummary:
      "Developed a system where two users can join an online room, see each other through webcams, and talk to each other through microphones and headphones.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/video-calling-webapp",
  },
  {
    mediaSrc: "image.png",
    workTitle: "MyCoin Webapp",
    workBusinessSectors: ["Financial accounting"],
    workStartDate: new Date(2022, 1),
    workEndDate: new Date(2022, 2),
    workSummary:
      "Developed a system where users can authenticate using their keystore file, get coins by performing transactions, and send coins to another wallet.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/my-coin-webapp",
  },
  {
    mediaSrc: "image.png",
    workTitle: "Todoist Clone",
    workBusinessSectors: ["Project management"],
    workStartDate: new Date(2021, 2),
    workEndDate: new Date(2021, 5),
    workSummary:
      "Developed a system where users can manage their to-do things on their boards, and also join the same board to manage their collaborative to-do things.",
    workServices: ["Web Development"],
    workDetailsHref: "/works/todoist-clone",
  },
];
