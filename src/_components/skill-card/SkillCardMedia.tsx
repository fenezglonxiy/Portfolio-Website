import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import skillCardMediaClasses from "./skillCardMediaClasses";

type SkillCardMediaRootProps = CardMediaProps;

const SkillCardMediaRoot = styled(CardMedia, {
  name: "PwSkillCard",
  slot: "Media",
})(
  memoTheme(({ theme }) => ({
    width: "31.5vw",
    height: "100%",

    [`${theme.breakpoints.up(theme.breakpoints.values.md)}`]: {
      aspectRatio: "3 / 2",
    },

    [`${theme.breakpoints.down(theme.breakpoints.values.md)}`]: {
      paddingTop: theme.spacing(22),
      width: "100%",
    },
  }))
);

type Props = SkillCardMediaRootProps;

function SkillCardMedia(props: Props) {
  const { className, ...rest } = props;

  return (
    <SkillCardMediaRoot
      className={clsx(skillCardMediaClasses.root, className)}
      borderRadius="sm"
      {...rest}
    />
  );
}

export default SkillCardMedia;
