import SideDetailsSection, {
  SideDetailsSectionProps,
} from "./SideDetailsSection";
import SideDetailsSectionTitle from "./SideDetailsSectionTitle";
import SideDetailsSectionContent from "./SideDetailsSectionContent";
import SideDetailsText from "./SideDetailsText";
import { WorkDetails } from "./types";

export type WorkStartDateDetailsSectionProps = SideDetailsSectionProps & {
  /**
   * The date when the work begins.
   */
  date: WorkDetails["startDate"];

  children?: undefined | null;
};

function WorkStartDateDetailsSection(props: WorkStartDateDetailsSectionProps) {
  const { date, ...rest } = props;

  return (
    <SideDetailsSection {...rest}>
      <SideDetailsSectionTitle>Start date</SideDetailsSectionTitle>

      <SideDetailsSectionContent orientation="vertical">
        <SideDetailsText>{date.format("MMMM YYYY")}</SideDetailsText>
      </SideDetailsSectionContent>
    </SideDetailsSection>
  );
}

export default WorkStartDateDetailsSection;
