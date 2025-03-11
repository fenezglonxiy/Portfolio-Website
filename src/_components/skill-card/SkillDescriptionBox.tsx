import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import skillDescriptionBoxClasses from "./skillDescriptionBoxClasses";

type SkillDescriptionBoxRootProps = React.ComponentPropsWithoutRef<"div">;

const SkillDescriptionBoxRoot = styled("div", {
  name: "PwSkillCardSkillDescriptionBox",
  slot: "Root",
})<SkillDescriptionBoxRootProps>(
  memoTheme(({ theme }) => ({
    flex: 1,
    alignSelf: "flex-end",
    paddingTop: theme.spacing(22),
  }))
);

type Props = SkillDescriptionBoxRootProps;

function SkillDescriptionBox(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillDescriptionBoxRoot
      className={clsx(skillDescriptionBoxClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillDescriptionBox;
