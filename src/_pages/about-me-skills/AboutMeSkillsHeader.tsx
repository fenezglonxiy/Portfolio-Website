/** @jsxImportSource @emotion/react */

"use client";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";

import getAboutMeSkillsHeaderCss from "./getAboutMeSkillsHeaderCss";

export type AboutMeSkillsHeaderProps = React.ComponentPropsWithoutRef<"div"> & {
  children?: undefined | null;
};

function AboutMeSkillsHeader(props: AboutMeSkillsHeaderProps) {
  const css = getAboutMeSkillsHeaderCss();

  return (
    <div css={css} {...props}>
      <div>
        <Typography component="h3" variant="h5" transform="uppercase">
          I can help you with
        </Typography>
      </div>

      <div>
        <Button variant="outlined" size="md">
          See my work
        </Button>
      </div>
    </div>
  );
}

export default AboutMeSkillsHeader;
