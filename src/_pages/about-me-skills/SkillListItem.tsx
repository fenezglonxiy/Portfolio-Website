import { styled } from "@mui/material";
import clsx from "clsx";

import skillListItemClasses from "./skillListItemClasses";

type SkillListItemRootProps = React.ComponentPropsWithoutRef<"li">;

const SkillListItemRoot = styled("li", {
  name: "PwAboutMeSkillListItem",
  slot: "Root",
})<SkillListItemRootProps>({
  position: "relative",
  willChange: "transform",
});

type Props = SkillListItemRootProps;

function SkillListItem(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillListItemRoot
      className={clsx(skillListItemClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillListItem;
