import { differenceInHours } from "date-fns";

import WorkDetailsContainer from "./WorkDetailsContainer";
import SideDetails from "./SideDetails";
import WorkStartDateDetailsSection from "./WorkStartDateDetailsSection";
import WorkDurationDetailsSection from "./WorkDurationDetailsSection";
import WorkBusinessSectorsDetailsSection from "./WorkBusinessSectorsDetailsSection";
import WorkServicesDetailsSection from "./WorkServicesDetailsSection";
import MainDetails from "./MainDetails";
import WorkAboutDetailsSection from "./WorkAboutDetailsSection";
import WorkChallengeDetailsSection from "./WorkChallengeDetailsSection";
import WorkResultsDetailsSection from "./WorkResultsDetailsSection";
import { WorkDetails } from "./types";

export type WorkDetailsContentProps = React.ComponentPropsWithoutRef<"main"> &
  WorkDetails;

function WorkDetailsContent(props: WorkDetailsContentProps) {
  const {
    startDate,
    endDate,
    businessSectors,
    services,
    about,
    challenge,
    workResults,
    ...rest
  } = props;
  const duration = differenceInHours(endDate, startDate);

  return (
    <main {...rest}>
      <WorkDetailsContainer>
        <SideDetails>
          <WorkStartDateDetailsSection date={startDate} />
          <WorkDurationDetailsSection duration={duration} />
          <WorkBusinessSectorsDetailsSection
            businessSectors={businessSectors}
          />
          <WorkServicesDetailsSection services={services} />
        </SideDetails>

        <MainDetails>
          <WorkAboutDetailsSection about={about} />
          <WorkChallengeDetailsSection challenge={challenge} />
          <WorkResultsDetailsSection workResults={workResults} />
        </MainDetails>
      </WorkDetailsContainer>
    </main>
  );
}

export default WorkDetailsContent;
