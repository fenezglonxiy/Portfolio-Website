/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import getHomeAboutMeDetailsCss from "./getHomeAboutMeDetailsCss";
import HomeAboutMeConcentration from "./HomeAboutMeConcentration";
import HomeAboutMeSkills from "./HomeAboutMeSkills";

type HomeAboutMeDetailsProps = React.HTMLAttributes<HTMLDivElement>;

function HomeAboutMeDetails(props: HomeAboutMeDetailsProps) {
  const css = getHomeAboutMeDetailsCss();

  return (
    <div css={css.root} {...props}>
      <HomeAboutMeConcentration />

      <HomeAboutMeSkills />
    </div>
  );
}

export default HomeAboutMeDetails;
