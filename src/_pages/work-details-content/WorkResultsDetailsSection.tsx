import MainDetailsSection, {
  MainDetailsSectionProps,
} from "./MainDetailsSection";
import MainDetailsSectionContent from "./MainDetailsSectionContent";
import MainDetailsSectionTitle from "./MainDetailsSectionTitle";
import { WorkDetails } from "./types";

export type WorkResultsDetailsSectionProps = MainDetailsSectionProps & {
  /**
   * Describe the results achieved after the work duration.
   */
  workResults: WorkDetails["workResults"];

  children?: undefined | null;
};

function WorkResultsDetailsSection(props: WorkResultsDetailsSectionProps) {
  const { workResults, ...rest } = props;

  return (
    <MainDetailsSection {...rest}>
      <MainDetailsSectionTitle>Results</MainDetailsSectionTitle>

      <MainDetailsSectionContent>{workResults}</MainDetailsSectionContent>
    </MainDetailsSection>
  );
}

export default WorkResultsDetailsSection;
