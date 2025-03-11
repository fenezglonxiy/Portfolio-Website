import { styled } from "@mui/material";
import clsx from "clsx";

import { Card } from "@/_components/Card";

import skillCardClasses from "./skillCardClasses";

type SkillCardRootProps = React.ComponentPropsWithoutRef<"div">;

const SkillCardRoot = styled(Card, {
  name: "PwSkillCard",
  slot: "Root",
})({});

type Props = SkillCardRootProps;

function SkillCard(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillCardRoot
      variant="fill"
      borderRadius="none"
      className={clsx(skillCardClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillCard;
