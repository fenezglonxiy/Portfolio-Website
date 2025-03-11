import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import { skillCardClasses } from "@/_components/skill-card";

import skillListItemClasses from "./skillListItemClasses";
import skillShowcaseContentClasses from "./skillShowcaseContentClasses";

type SkillShowcaseContentRootProps = React.ComponentPropsWithoutRef<"div">;

const SkillShowcaseContentRoot = styled("div", {
  name: "PwAboutMeSkillShowcaseContent",
  slot: "Root",
})<SkillShowcaseContentRootProps>(
  memoTheme(({ theme }) => ({
    [`& .${skillListItemClasses.root}:first-of-type .${skillCardClasses.root}`]:
      {
        backgroundColor: theme.palette.indigo[400],
      },

    [`& .${skillListItemClasses.root}:nth-of-type(2) .${skillCardClasses.root}`]:
      {
        backgroundColor: theme.palette.neutral[300],
      },

    [`& .${skillListItemClasses.root}:nth-of-type(3) .${skillCardClasses.root}`]:
      {
        backgroundColor: theme.palette.slate[900],
        color: "white",
      },
  }))
);

type Props = SkillShowcaseContentRootProps;

function SkillShowcaseContent(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillShowcaseContentRoot
      className={(clsx(skillShowcaseContentClasses.root), className)}
      {...rest}
    />
  );
}

export default SkillShowcaseContent;
