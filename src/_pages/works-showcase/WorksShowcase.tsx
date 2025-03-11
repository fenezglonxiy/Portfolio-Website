import { workShowcaseCards } from "@/dummyData";
import { ExpandedWorkCard } from "@/_components/expanded-work-card";

import WorksShowcaseContent from "./WorksShowcaseContent";

type Props = Omit<React.ComponentPropsWithoutRef<"section">, "children">;

function WorksShowcase(props: Props) {
  return (
    <section {...props}>
      <WorksShowcaseContent>
        {workShowcaseCards.map((work, idx) => (
          <ExpandedWorkCard
            key={idx}
            mediaSrc={work.mediaSrc}
            workBusinessSectors={work.workBusinessSectors}
            workDetailsHref={work.workDetailsHref}
            workEndDate={work.workEndDate}
            workServices={work.workServices}
            workStartDate={work.workStartDate}
            workSummary={work.workSummary}
            workTitle={work.workTitle}
          />
        ))}
      </WorksShowcaseContent>
    </section>
  );
}

export default WorksShowcase;
