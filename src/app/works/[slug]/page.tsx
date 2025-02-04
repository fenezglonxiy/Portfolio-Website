import { addMonths } from "date-fns";
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

const titleToWork = {
  struktura: {
    title: "Struktura.",
    summary:
      "Utilizing captivating imagery to enhance the overall user experience",
    mediaSrc: "/image.png",
    startDate: new Date(),
    endDate: addMonths(new Date(), 2),
    businessSectors: ["Construction"],
    services: ["Web Design", "Web Development", "Mobile Development"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis aliquet nisl at eleifend. Donec ut ex interdum, malesuada turpis quis, rhoncus justo. Donec auctor lectus eu leo vestibulum accumsan. Nullam pretium rhoncus libero vel congue. Integer nec orci consequat, dignissim lectus id, rhoncus lorem. Aenean at malesuada sem. Ut a rutrum sem. Ut sit amet varius ligula. Suspendisse commodo, tortor vulputate hendrerit maximus, elit purus convallis justo, eget semper eros arcu in arcu. Donec ut venenatis lectus. Nullam non mi viverra elit placerat pretium venenatis quis sapien. Vivamus orci orci, scelerisque ut enim sed, sodales viverra magna. Sed cursus gravida malesuada. Nunc et varius neque.",
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis aliquet nisl at eleifend. Donec ut ex interdum, malesuada turpis quis, rhoncus justo. Donec auctor lectus eu leo vestibulum accumsan. Nullam pretium rhoncus libero vel congue. Integer nec orci consequat, dignissim lectus id, rhoncus lorem. Aenean at malesuada sem. Ut a rutrum sem. Ut sit amet varius ligula. Suspendisse commodo, tortor vulputate hendrerit maximus, elit purus convallis justo, eget semper eros arcu in arcu. Donec ut venenatis lectus. Nullam non mi viverra elit placerat pretium venenatis quis sapien. Vivamus orci orci, scelerisque ut enim sed, sodales viverra magna. Sed cursus gravida malesuada. Nunc et varius neque.",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis aliquet nisl at eleifend. Donec ut ex interdum, malesuada turpis quis, rhoncus justo. Donec auctor lectus eu leo vestibulum accumsan. Nullam pretium rhoncus libero vel congue. Integer nec orci consequat, dignissim lectus id, rhoncus lorem. Aenean at malesuada sem. Ut a rutrum sem. Ut sit amet varius ligula. Suspendisse commodo, tortor vulputate hendrerit maximus, elit purus convallis justo, eget semper eros arcu in arcu. Donec ut venenatis lectus. Nullam non mi viverra elit placerat pretium venenatis quis sapien. Vivamus orci orci, scelerisque ut enim sed, sodales viverra magna. Sed cursus gravida malesuada. Nunc et varius neque.",
  },
};

export default async function WorkDetails(props: Props) {
  const { params } = props;
  const slug = (await params).slug;

  if (!Object.keys(titleToWork).includes(slug)) {
    notFound();
  }

  const work = titleToWork[slug as keyof typeof titleToWork];

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
