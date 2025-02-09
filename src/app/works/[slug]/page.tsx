import { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkDetailsContent } from "@/_pages/work-details-content";
import { WorkDetailsHero } from "@/_pages/work-details-hero";
import { WorkDetailsOtherWorks } from "@/_pages/work-details-other-works";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  return {
    title: `Work - ${slug[0].toUpperCase() + slug.slice(1)}`,
  };
}

const slugToWork = {
  "portfolio-website": {
    title: "Portfolio Website.",
    summary:
      "Developed an online space to show my work, skills, and experience and let others contact me for work.",
    mediaSrc: "/image.png",
    startDate: new Date(2023, 11),
    endDate: new Date(),
    businessSectors: ["None"],
    services: ["Web Development"],
    about: "",
    challenge: "",
    results: "",
  },
  "english-tutor-webapp": {
    title: "English Tutor Webapp",
    summary:
      "Developed a system that provides online one-on-one English tutoring services where students and tutors can join online classrooms and discuss topics under tutor guidance in English.",
    mediaSrc: "/image.png",
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 4),
    businessSectors: ["Education"],
    services: ["Web Design", "Web Development"],
    about:
      "According to the International Center for Language Studies and many other reports, English is the most spoken second language in the world. In particular, about 1.52 billion people worldwide,  around 18.5 percent of the worldwide population, speak English, and around 75 percent of 1.52 billion people worldwide are not native speakers (https://www.icls.edu/blog/most-spoken-languages-in-the-world). Due to the popularity of English, many countries apply English to their curriculum, for example, Vietnam, India, etc. In four English skills, including reading, writing, listening, and speaking, speaking may be the toughest skill to master for most non-native learners. In particular, to speak fluent and natural English, learners must learn about native culture, idioms in English, slang words or phrases, and the most important factor is daily practicing. Not everyone can copycat English native speakers in movies or on streaming platforms, not to mention the informal speaking ways of some of them. Therefore, to help people worldwide learn formal speaking approaches in English, we have developed a system that provides online one-on-one English tutoring services where students learn English from our highly educated English tutors. ",
    challenge:
      "There are many processes that we had to implement to allow the system to work properly: User authentication process. User authorization process. The user registers to become a tutor process. Admin reviewing and approving tutor process. Tutor creating teaching schedule process. The student registers for a learning day to the teaching schedule of a tutor process. Opening an online classroom on a scheduled day process. Open an online classroom without scheduling if an online student and an online tutor accept the current learning/teaching request process. Cancelling a scheduled learning/teaching day process. ... However, we only had around 3 months, the duration of a course, to develop the system. It was too short a time for us to build the system covering most of the user scenarios.  The second challenge we faced was we didn't have enough skills and experience to implement the most crucial feature of the system properly, which is the video calling feature. We couldn't handle problems around this feature, for example, reconnecting one or both connections lost, disconnecting the student and the tutor when the learning/teaching session ends, recording the call, optimizing the connection, etc. The final challenge was we couldn't make the simple-peer package work in the production server although we tried several configurations.",
    results:
      "The system could create an online classroom based on a scheduled learning/teaching session, where the tutor and the student can video-call, in the local environment. But it failed in the production environment.",
  },
  "video-calling-webapp": {
    title: "Video Calling Webapp",
    summary:
      "Developed a system where two users can join an online room, see each other through webcams, and talk to each other through microphones and headphones.",
    mediaSrc: "/image.png",
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 2),
    businessSectors: ["None"],
    services: ["Web Development"],
    about:
      "The video-calling feature is the most crucial of the English Tutor Webapp, so we, the developer team of the English Tutor Webapp, searched for solutions, discussed, and decided to carry on a Proof of Concept to represent the agreed solution, which is using the simple-peer package to implement the video-calling feature. And I volunteered to carry on the Proof of Concept.",
    challenge:
      "The simple-peer package was a new package for me, so I had to go through its documentation and some tutorials to solve the problem in the local environment.\nHowever, I didn't have enough time to deal with problems around the feature, for example, connection loss, high latency, etc. Additionally, I couldn't deploy a signaling server for the simple-peer package to work in the production environment.",
    results:
      "I created a Proof of Concept including a representation to introduce the simple-peer package and show my approach, and an example project was successful in allowing two people to video-call in the local environment.",
  },
  "mycoin-webapp": {
    title: "MyCoin Webapp",
    summary:
      "Developed a system where users can authenticate using their keystore file, get coins by performing transactions, and send coins to another wallet.",
    mediaSrc: "/image.png",
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 2),
    businessSectors: ["Financial accounting"],
    services: ["Web Development"],
    about:
      "Since 2020, crypto has always been an attractive investment channel to investors. Therefore, there have been many platforms produced to cater to trading crypto. The crypto trading platform prevents interference and frauding from one party and provides security, availability, data reconciliation, and trust and consensus between traders as high as possible based on the properties of the decentralized system. I created a crypto trading platform for my custom and dummy coin called MyCoin to get an overview of how the decentralized system works.",
    challenge:
      "Decentralized architecture was a new architecture type for me so I had to go through many documentation to understand its concepts and how it works.\nAdditionally, I lacked the skills and time to set up, configure, and deploy a standard (high security, highly scalable, highly elastic, etc) signaling server for a crypto trading platform to work in the production environment.",
    results:
      "I created a crypto trading platform allowing nodes in the local environment to authenticate using their keystore file, get coins by performing transactions, and send coins to another wallet.",
  },
  "todoist-clone": {
    title: "Todoist Clone",
    summary:
      "Developed a system where users can manage their to-do things on their boards, and also join the same board to manage their collaborative to-do things.",
    mediaSrc: "/image.png",
    startDate: new Date(2021, 2),
    endDate: new Date(2021, 5),
    businessSectors: ["Project management"],
    services: ["Web Development"],
    about:
      "Todoist is one of the best to-do list apps. It has every feature you need on a to-do list app, for example, capturing and organizing tasks, sorting tasks using built-in filters or custom filters, planning your schedule in the calendar view, etc. Todoist helps you clear your mind, stay organized, and focus on what you need and when you need it. I tried to build a clone version of Todoist while I learned React. In other words, Todoist Clone is my first React project.",
    challenge:
      "I had many problems in building components. I built the modal component and menu in the wrong way. I should have rendered these components inside the body tag and calculated their position in most cases instead of positioning them relative to their trigger component, for example, the button component. Additionally, I also had many problems in encapsulating components. I shouldn't have encapsulated same-action or same-appearance (color, layout, etc.) or attached things (button with menu or modal, etc.) into components. I should have read more about the anatomy of user interface components to encapsulate components more appropriately.\nFor styling, I should have set up a theme using CSS variables to prevent duplicated styles scattered among the code. Additionally, I should have used the module CSS approach instead of regular .scss files. The consequence of importing regular .scss files was conflicted components' styles.\nFurthermore, I also had performance issues with the calendar view for rendering all slots in the calendar instead of lazy rendering slots when the user scrolls down.",
    results:
      "Although the project has too many problems and the source code is poorly written, the application still allows the user to authenticate and authorize the user. The authorized user can create boards, create tasks, organize tasks using simple filters, and invite others to collaborate on the same board. I am proud of our team because we tried our best and gained much experience from this project.",
  },
};

export default async function WorkDetails(props: Props) {
  const { params } = props;
  const slug = (await params).slug;

  if (!Object.keys(slugToWork).includes(slug)) {
    notFound();
  }

  const work = slugToWork[slug as keyof typeof slugToWork];

  return (
    <article>
      <WorkDetailsHero
        title={work.title}
        summary={work.summary}
        mediaSrc={work.mediaSrc}
      />
      <WorkDetailsContent
        startDate={work.startDate}
        endDate={work.endDate}
        businessSectors={work.businessSectors}
        services={work.services}
        about={work.about}
        challenge={work.challenge}
        results={work.results}
      />
      <WorkDetailsOtherWorks />
    </article>
  );
}
