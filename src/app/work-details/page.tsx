import { addMonths } from "date-fns";
import { Metadata } from "next";

import { WorkDetailsContent } from "@/_pages/work-details-content";
import { WorkDetailsHero } from "@/_pages/work-details-hero";
import { WorkDetailsOtherWorks } from "@/_pages/work-details-other-works";

export const metadata: Metadata = {};

const work = {
  startDate: new Date(),
  endDate: addMonths(new Date(), 2),
  businessSectors: ["Construction"],
  services: ["Web Design", "Web Development", "Mobile Development"],
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis aliquet nisl at eleifend. Donec ut ex interdum, malesuada turpis quis, rhoncus justo. Donec auctor lectus eu leo vestibulum accumsan. Nullam pretium rhoncus libero vel congue. Integer nec orci consequat, dignissim lectus id, rhoncus lorem. Aenean at malesuada sem. Ut a rutrum sem. Ut sit amet varius ligula. Suspendisse commodo, tortor vulputate hendrerit maximus, elit purus convallis justo, eget semper eros arcu in arcu. Donec ut venenatis lectus. Nullam non mi viverra elit placerat pretium venenatis quis sapien. Vivamus orci orci, scelerisque ut enim sed, sodales viverra magna. Sed cursus gravida malesuada. Nunc et varius neque.",
  challenge:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis aliquet nisl at eleifend. Donec ut ex interdum, malesuada turpis quis, rhoncus justo. Donec auctor lectus eu leo vestibulum accumsan. Nullam pretium rhoncus libero vel congue. Integer nec orci consequat, dignissim lectus id, rhoncus lorem. Aenean at malesuada sem. Ut a rutrum sem. Ut sit amet varius ligula. Suspendisse commodo, tortor vulputate hendrerit maximus, elit purus convallis justo, eget semper eros arcu in arcu. Donec ut venenatis lectus. Nullam non mi viverra elit placerat pretium venenatis quis sapien. Vivamus orci orci, scelerisque ut enim sed, sodales viverra magna. Sed cursus gravida malesuada. Nunc et varius neque.",
  workResults:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis aliquet nisl at eleifend. Donec ut ex interdum, malesuada turpis quis, rhoncus justo. Donec auctor lectus eu leo vestibulum accumsan. Nullam pretium rhoncus libero vel congue. Integer nec orci consequat, dignissim lectus id, rhoncus lorem. Aenean at malesuada sem. Ut a rutrum sem. Ut sit amet varius ligula. Suspendisse commodo, tortor vulputate hendrerit maximus, elit purus convallis justo, eget semper eros arcu in arcu. Donec ut venenatis lectus. Nullam non mi viverra elit placerat pretium venenatis quis sapien. Vivamus orci orci, scelerisque ut enim sed, sodales viverra magna. Sed cursus gravida malesuada. Nunc et varius neque.",
};

export default function WorkDetails() {
  return (
    <article>
      <WorkDetailsHero />
      <WorkDetailsContent {...work} />
      <WorkDetailsOtherWorks />
    </article>
  );
}
