import React from "react";
import { WorkShowcaseCardProps } from "./WorkShowcaseCard";
import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import WorkShowcaseCardContentBoxTitle from "./WorkShowcaseCardContentBoxTitle";
import WorkShowcaseCardWorkBusinessSector from "./WorkShowcaseCardWorkBusinessSector";

export type WorkShowcaseCardWorkBusinessSectorsProps =
  React.ComponentPropsWithoutRef<"div"> & {
    businessSectors: WorkShowcaseCardProps["workBusinessSectors"];
    children?: undefined | null;
  };

function WorkShowcaseCardWorkBusinessSectors(
  props: WorkShowcaseCardWorkBusinessSectorsProps
) {
  const { businessSectors, ...rest } = props;

  return (
    <WorkShowcaseCardContentBox verticalSpacing={2} {...rest}>
      <WorkShowcaseCardContentBoxTitle>
        Business sectors
      </WorkShowcaseCardContentBoxTitle>

      <WorkShowcaseCardContentBox horizontalSpacing={2}>
        {businessSectors.map((sector, idx) => (
          <WorkShowcaseCardWorkBusinessSector key={idx} label={sector} />
        ))}
      </WorkShowcaseCardContentBox>
    </WorkShowcaseCardContentBox>
  );
}

export default WorkShowcaseCardWorkBusinessSectors;
