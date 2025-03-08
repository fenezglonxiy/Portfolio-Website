import { styled } from "@mui/material";
import clsx from "clsx";

import { Typography } from "@/_components/Typography";

import skillShowcaseTitleClasses from "./skillShowcaseTitleClasses";

type SkillShowcaseTitleRootProps = Omit<
  React.ComponentPropsWithoutRef<"h2">,
  "color"
>;

const SkillShowcaseTitleRoot = styled(Typography, {
  name: "PwAboutMeSkillShowcaseTitle",
  slot: "Root",
})({});

type Props = SkillShowcaseTitleRootProps;

function SkillShowcaseTitle(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillShowcaseTitleRoot
      component="h2"
      variant="subtitle2"
      className={clsx(skillShowcaseTitleClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillShowcaseTitle;
