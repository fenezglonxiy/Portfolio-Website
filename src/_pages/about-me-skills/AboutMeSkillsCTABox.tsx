import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import aboutMeSkillsCTABoxClasses from "./aboutMeSkillsCTABoxClasses";

type AboutMeSkillsCTABoxRootProps = React.ComponentPropsWithoutRef<"div">;

const AboutMeSkillsCTABoxRoot = styled("div", {
  name: "PwAboutMeSkillsCTABox",
  slot: "Root",
})<AboutMeSkillsCTABoxRootProps>(
  memoTheme(({ theme }) => ({
    position: "relative",
    padding: `${theme.spacing(8)} 0`,
    display: "flex",
    justifyContent: "center",
  }))
);

type Props = AboutMeSkillsCTABoxRootProps;

function AboutMeSkillsCTABox(props: Props) {
  const { className, ...rest } = props;

  return (
    <AboutMeSkillsCTABoxRoot
      className={(clsx(aboutMeSkillsCTABoxClasses.root), className)}
      {...rest}
    />
  );
}

export default AboutMeSkillsCTABox;
