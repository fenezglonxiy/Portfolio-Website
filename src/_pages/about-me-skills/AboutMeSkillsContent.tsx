import React from "react";
import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import aboutMeSkillsContentClasses from "./aboutMeSkillsContentClasses";

type AboutMeSkillsContentRootProps = React.ComponentPropsWithoutRef<"div">;

const AboutMeSkillsContentRoot = styled("div", {
  name: "PwAboutMeSkillsContent",
  slot: "Root",
})<AboutMeSkillsContentRootProps>(
  memoTheme(({ theme }) => ({
    padding: `${theme.spacing(10)} 0 ${theme.spacing(27)}`,
  }))
);

type Props = AboutMeSkillsContentRootProps;

const AboutMeSkillsContent = React.forwardRef(function AboutMeSkillsContent(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, ...rest } = props;

  return (
    <AboutMeSkillsContentRoot
      ref={ref}
      className={clsx(aboutMeSkillsContentClasses.root, className)}
      {...rest}
    />
  );
});

AboutMeSkillsContent.displayName = "AboutMeSkillsContent";

export default AboutMeSkillsContent;
