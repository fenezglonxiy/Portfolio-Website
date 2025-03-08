import { styled } from "@mui/material";
import clsx from "clsx";

import { Typography } from "@/_components/Typography";

import skillDescriptionClasses from "./skillDescriptionClasses";

type SkillDescriptionRootProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

const SkillDescriptionRoot = styled(Typography, {
  name: "PwSkillCardSkillDescription",
  slot: "Root",
})<SkillDescriptionRootProps>({
  overflow: "hidden",
});

type Props = SkillDescriptionRootProps;

function SkillDescription(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillDescriptionRoot
      variant="body1Medium"
      fontWeight="regular"
      className={clsx(skillDescriptionClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillDescription;
