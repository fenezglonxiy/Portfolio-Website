import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import skillCardContainerClasses from "./skillCardContainerClasses";

type SkillCardContainerRootProps = React.ComponentPropsWithoutRef<"div">;

const SkillCardContainerRoot = styled("div", {
  name: "PwSkillCardContainer",
  slot: "Root",
})(
  memoTheme(({ theme }) => ({
    width: "100%",
    height: "100%",
    padding: theme.spacing(6),
  }))
);

type Props = SkillCardContainerRootProps;

function SkillCardContainer(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillCardContainerRoot
      className={clsx(skillCardContainerClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillCardContainer;
