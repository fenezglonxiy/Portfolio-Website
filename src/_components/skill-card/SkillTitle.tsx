import React from "react";
import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import { Typography } from "@/_components/Typography";

import skillTitleClasses from "./skillTitleClasses";

type SkillTitleRootProps = Omit<React.ComponentPropsWithoutRef<"h1">, "color">;

const SkillTitleRoot = styled(Typography, {
  name: "PwSkillCardSkillTitle",
  slot: "Root",
})<SkillTitleRootProps>(
  memoTheme(({ theme }) => ({
    position: "absolute",

    [`&.${skillTitleClasses.root}`]: {
      fontWeight: `${theme.typography.fontWeightSemibold}`,
    },

    [`${theme.breakpoints.down(theme.breakpoints.values.xl)}`]: {
      ...theme.typography.h3,
    },

    [`${theme.breakpoints.down(theme.breakpoints.values.lg)}`]: {
      ...theme.typography.h4,
    },
  }))
);

type Props = SkillTitleRootProps;

function SkillTitle(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillTitleRoot
      variant="h2"
      className={clsx(skillTitleClasses.root, className)}
      {...rest}
    />
  );
}

export default SkillTitle;
