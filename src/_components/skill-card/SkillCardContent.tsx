import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import { CardContent, CardContentProps } from "@/_components/Card";

import skillCardContentClasses from "./skillCardContentClasses";

type SkillCardContentRootProps = CardContentProps;

const SkillCardContentRoot = styled(CardContent, {
  name: "PwSkillCardContent",
  slot: "Root",
})<SkillCardContentRootProps>(
  memoTheme(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(27.5),

    [`&.${skillCardContentClasses.root}`]: {
      padding: 0,

      [`${theme.breakpoints.down(theme.breakpoints.values.lg)}`]: {
        gap: theme.spacing(10),
      },

      [`${theme.breakpoints.down(theme.breakpoints.values.md)}`]: {
        flexDirection: "column",
      },
    },
  }))
);

type Props = CardContentProps;

function SkillCardContent(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillCardContentRoot
      className={clsx(skillCardContentClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillCardContent;
