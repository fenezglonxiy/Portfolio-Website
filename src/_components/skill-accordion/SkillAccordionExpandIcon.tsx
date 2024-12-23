import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import React from "react";

export type SkillAccordionExpandIconProps = React.ComponentPropsWithoutRef<
  typeof ArrowCircleDownIcon
>;

function SkillAccordionExpandIcon(props: SkillAccordionExpandIconProps) {
  return <ArrowCircleDownIcon color="inherit" {...props} />;
}

export default SkillAccordionExpandIcon;
