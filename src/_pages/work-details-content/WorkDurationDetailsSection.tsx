import SideDetailsSection, {
  SideDetailsSectionProps,
} from "./SideDetailsSection";
import SideDetailsSectionTitle from "./SideDetailsSectionTitle";
import SideDetailsSectionContent from "./SideDetailsSectionContent";
import SideDetailsText from "./SideDetailsText";

export type WorkDurationDetailsSectionProps = SideDetailsSectionProps & {
  /**
   * The work duration.
   */
  duration: number;

  children?: undefined | null;
};

function WorkDurationDetailsSection(props: WorkDurationDetailsSectionProps) {
  const { duration, ...rest } = props;

  return (
    <SideDetailsSection {...rest}>
      <SideDetailsSectionTitle>Duration</SideDetailsSectionTitle>

      <SideDetailsSectionContent orientation="vertical">
        <SideDetailsText>{duration} hours</SideDetailsText>
      </SideDetailsSectionContent>
    </SideDetailsSection>
  );
}

export default WorkDurationDetailsSection;
