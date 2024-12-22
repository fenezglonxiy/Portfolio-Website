import React from "react";
import { CardContentBox } from "../Card";
import { WorkCardProps } from "./WorkCard";
import WorkCardWorkBusinessSector from "./WorkCardWorkBusinessSector";

export type WorkCardWorkBusinessSectorsProps =
  React.ComponentPropsWithoutRef<"div"> & {
    businessSectors: WorkCardProps["workBusinessSectors"];
  };

function WorkCardWorkBusinessSectors(props: WorkCardWorkBusinessSectorsProps) {
  const { businessSectors, ...rest } = props;

  return (
    <CardContentBox orientation="horizontal" flexGap={2} {...rest}>
      {businessSectors.map((sector, idx) => (
        <WorkCardWorkBusinessSector key={idx} label={sector} />
      ))}
    </CardContentBox>
  );
}

export default WorkCardWorkBusinessSectors;
