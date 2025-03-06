import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import clsx from "clsx";

import { Typography } from "@/_components/Typography";

import skillDescriptionClasses from "./skillDescriptionClasses";

type SkillDescriptionRootProps = React.ComponentPropsWithoutRef<"div">;

const SkillDescriptionRoot = styled("div", {
  name: "PwSkillCardSkillDescription",
  slot: "Root",
})<SkillDescriptionRootProps>(
  memoTheme(({ theme }) => ({
    flex: 1,
    alignSelf: "flex-end",

    [`${theme.breakpoints.between(
      theme.breakpoints.values.md,
      theme.breakpoints.values.lg
    )}`]: {
      paddingTop: theme.spacing(22),
    },
  }))
);

type Props = SkillDescriptionRootProps;

function SkillDescription(props: Props) {
  const { className, children, ...rest } = props;

  return (
    <SkillDescriptionRoot
      className={clsx(skillDescriptionClasses.root, className)}
      {...rest}
    >
      <Typography variant="body1Medium" fontWeight="regular">
        {children}
      </Typography>
    </SkillDescriptionRoot>
  );
}

export default SkillDescription;
