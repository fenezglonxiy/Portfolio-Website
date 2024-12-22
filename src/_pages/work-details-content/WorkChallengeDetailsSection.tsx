import MainDetailsSection, {
  MainDetailsSectionProps,
} from "./MainDetailsSection";
import MainDetailsSectionContent from "./MainDetailsSectionContent";
import MainDetailsSectionTitle from "./MainDetailsSectionTitle";
import { WorkDetails } from "./types";

export type WorkChallengeDetailsSectionProps = MainDetailsSectionProps & {
  /**
   * Describe about the challenge faced while performing the work.
   */
  challenge: WorkDetails["challenge"];

  children?: undefined | null;
};

function WorkChallengeDetailsSection(props: WorkChallengeDetailsSectionProps) {
  const { challenge, ...rest } = props;

  return (
    <MainDetailsSection {...rest}>
      <MainDetailsSectionTitle>Challenge</MainDetailsSectionTitle>

      <MainDetailsSectionContent>{challenge}</MainDetailsSectionContent>
    </MainDetailsSection>
  );
}

export default WorkChallengeDetailsSection;
