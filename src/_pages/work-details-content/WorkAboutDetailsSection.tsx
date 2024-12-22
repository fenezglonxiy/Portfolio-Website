import MainDetailsSection, {
  MainDetailsSectionProps,
} from "./MainDetailsSection";
import MainDetailsSectionContent from "./MainDetailsSectionContent";
import { WorkDetails } from "./types";

export type WorkAboutDetailsSectionProps = MainDetailsSectionProps & {
  /**
   * Describe about the work.
   */
  about: WorkDetails["about"];

  children?: undefined | null;
};

function WorkAboutDetailsSection(props: WorkAboutDetailsSectionProps) {
  const { about, ...rest } = props;

  return (
    <MainDetailsSection {...rest}>
      <MainDetailsSectionContent>{about}</MainDetailsSectionContent>
    </MainDetailsSection>
  );
}

export default WorkAboutDetailsSection;
