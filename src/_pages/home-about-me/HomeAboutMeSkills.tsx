/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";

import getHomeAboutMeSkillsCss from "./getHomeAboutMeSkills";

type HomeAboutMeSkillsProps = React.HTMLAttributes<HTMLDivElement>;

function HomeAboutMeSkills(props: HomeAboutMeSkillsProps) {
  const theme = useTheme();
  const css = getHomeAboutMeSkillsCss(theme);

  return (
    <div {...props}>
      <ul className="flow-spacer-y" css={css.skillList}>
        <Typography
          component="li"
          variant="body1"
          color="neutral-650"
          transform="uppercase"
        >
          Web Development
        </Typography>
      </ul>
    </div>
  );
}

export default HomeAboutMeSkills;
