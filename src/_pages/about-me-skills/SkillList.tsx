import { styled } from "@mui/material";
import clsx from "clsx";

import skillListClasses from "./skillListClasses";

type SkillListRootProps = React.ComponentPropsWithoutRef<"ul">;

const SkillListRoot = styled("ul", {
  name: "PwAboutMeSkillList",
  slot: "Root",
})({});

type Props = SkillListRootProps;

function SkillList(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillListRoot
      className={clsx(skillListClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillList;
