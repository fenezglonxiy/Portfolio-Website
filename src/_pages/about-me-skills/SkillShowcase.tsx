import { styled } from "@mui/material";
import clsx from "clsx";

import skillShowcaseClasses from "./skillShowcaseClasses";

type SkillShowcaseRootProps = React.ComponentPropsWithoutRef<"section">;

const SkillShowcaseRoot = styled("section", {
  name: "PwAboutMeSkillShowcase",
  slot: "Root",
})({
  position: "relative",
});

type Props = SkillShowcaseRootProps;

function SkillShowcase(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillShowcaseRoot
      className={clsx(skillShowcaseClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillShowcase;
