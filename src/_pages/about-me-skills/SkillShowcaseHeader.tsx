import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import skillShowcaseHeaderClasses from "./skillShowcaseHeaderClasses";

type SkillShowcaseHeaderRootProps = React.ComponentPropsWithoutRef<"header">;

const SkillShowcaseHeaderRoot = styled("header", {
  name: "PwAboutMeSkillShowcaseHeader",
  slot: "Root",
})<SkillShowcaseHeaderRootProps>(
  memoTheme(({ theme }) => ({
    position: "relative",
    padding: `0 ${theme.spacing(8)}`,
  }))
);

type Props = SkillShowcaseHeaderRootProps;

function SkillShowcaseHeader(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillShowcaseHeaderRoot
      className={clsx(skillShowcaseHeaderClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillShowcaseHeader;
