/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getAboutMeSkillsContentCss from "./getAboutMeSkillsContentCss";

export type AboutMeSkillsContentProps = React.ComponentPropsWithoutRef<"div">;

function AboutMeSkillsContent(props: AboutMeSkillsContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getAboutMeSkillsContentCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.container} className="flow-spacer-y">
        {children}
      </div>
    </div>
  );
}

export default AboutMeSkillsContent;
