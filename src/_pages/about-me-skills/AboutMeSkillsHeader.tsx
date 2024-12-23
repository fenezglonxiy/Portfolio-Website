/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import getAboutMeSkillsHeaderCss from "./getAboutMeSkillsHeaderCss";
import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";

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
