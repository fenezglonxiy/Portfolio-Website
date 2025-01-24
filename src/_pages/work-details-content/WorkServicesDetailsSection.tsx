import SideDetailsChip from "./SideDetailsChip";
import SideDetailsSection, {
  SideDetailsSectionProps,
} from "./SideDetailsSection";
import SideDetailsSectionContent from "./SideDetailsSectionContent";
import SideDetailsSectionTitle from "./SideDetailsSectionTitle";
import { WorkDetails } from "./types";

export type WorkServicesDetailsSectionProps = SideDetailsSectionProps & {
  /**
   * The services that the work provides.
   */
  services: WorkDetails["services"];

  children?: undefined | null;
};

function WorkServicesDetailsSection(props: WorkServicesDetailsSectionProps) {
  const { services, ...rest } = props;

  return (
    <SideDetailsSection {...rest}>
      <SideDetailsSectionTitle>Services</SideDetailsSectionTitle>

      <SideDetailsSectionContent orientation="horizontal">
        {services.map((service, idx) => (
          <SideDetailsChip key={idx} label={service} />
        ))}
      </SideDetailsSectionContent>
    </SideDetailsSection>
  );
}

export default WorkServicesDetailsSection;
