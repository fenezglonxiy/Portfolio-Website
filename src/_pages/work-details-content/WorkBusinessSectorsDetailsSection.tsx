import SideDetailsChip from "./SideDetailsChip";
import SideDetailsSection, {
  SideDetailsSectionProps,
} from "./SideDetailsSection";
import SideDetailsSectionContent from "./SideDetailsSectionContent";
import SideDetailsSectionTitle from "./SideDetailsSectionTitle";
import { WorkDetails } from "./types";

export type WorkBusinessSectorsDetailsSectionProps = SideDetailsSectionProps & {
  /**
   * The business sectors that the work relates to.
   */
  businessSectors: WorkDetails["businessSectors"];

  children?: undefined | null;
};

function WorkBusinessSectorsDetailsSection(
  props: WorkBusinessSectorsDetailsSectionProps
) {
  const { businessSectors, ...rest } = props;

  return (
    <SideDetailsSection {...rest}>
      <SideDetailsSectionTitle>Business sectors</SideDetailsSectionTitle>

      <SideDetailsSectionContent orientation="horizontal">
        {businessSectors.map((sector, idx) => (
          <SideDetailsChip key={idx} label={sector} />
        ))}
      </SideDetailsSectionContent>
    </SideDetailsSection>
  );
}

export default WorkBusinessSectorsDetailsSection;
