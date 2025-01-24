import SideDetailsSection, {
  SideDetailsSectionProps,
} from "./SideDetailsSection";
import SideDetailsSectionTitle from "./SideDetailsSectionTitle";
import SideDetailsSectionContent from "./SideDetailsSectionContent";
import { WorkDetails } from "./types";
import SideDetailsText from "./SideDetailsText";

export type WorkDurationDetailsSectionProps = SideDetailsSectionProps & {
  /**
   * The work duration.
   */
  duration: WorkDetails["duration"];

  children?: undefined | null;
};

function WorkDurationDetailsSection(props: WorkDurationDetailsSectionProps) {
  const { duration, ...rest } = props;

  return (
    <SideDetailsSection {...rest}>
      <SideDetailsSectionTitle>Duration</SideDetailsSectionTitle>

      <SideDetailsSectionContent orientation="vertical">
        <SideDetailsText>{duration.asHours()} hours</SideDetailsText>
      </SideDetailsSectionContent>
    </SideDetailsSection>
  );
}

export default WorkDurationDetailsSection;
