import WorkDetailsContainer from "./WorkDetailsContainer";
import SideDetails from "./SideDetails";
import MainDetails from "./MainDetails";
import { WorkDetails } from "./types";
import SideDetailsSection from "./SideDetailsSection";
import SideDetailsSectionTitle from "./SideDetailsSectionTitle";
import SideDetailsSectionContent from "./SideDetailsSectionContent";
import WorkTimePoint from "./WorkTimePoint";
import WorkBusinessSectorBox from "./WorkBusinessSectorBox";
import WorkBusinessSector from "./WorkBusinessSector";
import WorkServiceBox from "./WorkServiceBox";
import WorkService from "./WorkService";
import MainDetailsSection from "./MainDetailsSection";
import MainDetailsSectionContent from "./MainDetailsSectionContent";
import MainDetailsSectionTitle from "./MainDetailsSectionTitle";

export type WorkDetailsContentProps = Omit<
  React.ComponentPropsWithoutRef<"main">,
  "results"
> &
  WorkDetails;

function WorkDetailsContent(props: WorkDetailsContentProps) {
  const {
    startDate,
    endDate,
    businessSectors,
    services,
    about,
    challenge,
    results,
    ...rest
  } = props;

  return (
    <main {...rest}>
      <WorkDetailsContainer>
        <SideDetails>
          <SideDetailsSection>
            <SideDetailsSectionTitle>Start Date</SideDetailsSectionTitle>

            <SideDetailsSectionContent>
              <WorkTimePoint date={startDate} />
            </SideDetailsSectionContent>
          </SideDetailsSection>

          <SideDetailsSection>
            <SideDetailsSectionTitle>End Date</SideDetailsSectionTitle>

            <SideDetailsSectionContent>
              <WorkTimePoint date={endDate} />
            </SideDetailsSectionContent>
          </SideDetailsSection>

          <SideDetailsSection>
            <SideDetailsSectionTitle>Business Sectors</SideDetailsSectionTitle>

            <SideDetailsSectionContent>
              <WorkBusinessSectorBox>
                {businessSectors.map((businessSector, idx) => (
                  <WorkBusinessSector key={idx} label={businessSector} />
                ))}
              </WorkBusinessSectorBox>
            </SideDetailsSectionContent>
          </SideDetailsSection>

          <SideDetailsSection>
            <SideDetailsSectionTitle>Services</SideDetailsSectionTitle>

            <SideDetailsSectionContent>
              <WorkServiceBox>
                {services.map((service, idx) => (
                  <WorkService key={idx} label={service} />
                ))}
              </WorkServiceBox>
            </SideDetailsSectionContent>
          </SideDetailsSection>
        </SideDetails>

        <MainDetails>
          <MainDetailsSection>
            <MainDetailsSectionContent>{about}</MainDetailsSectionContent>
          </MainDetailsSection>

          <MainDetailsSection>
            <MainDetailsSectionTitle>Challenge</MainDetailsSectionTitle>

            <MainDetailsSectionContent>{challenge}</MainDetailsSectionContent>
          </MainDetailsSection>

          <MainDetailsSection>
            <MainDetailsSectionTitle>Results</MainDetailsSectionTitle>

            <MainDetailsSectionContent>{results}</MainDetailsSectionContent>
          </MainDetailsSection>
        </MainDetails>
      </WorkDetailsContainer>
    </main>
  );
}

export default WorkDetailsContent;
