/** @jsxImportSource @emotion/react */

"use client";

import getHomeAboutMeDetailsCss from "./getHomeAboutMeDetailsCss";
import HomeAboutMeSkills from "./HomeAboutMeSkills";
import HomeAboutMeBusinessAttention from "./HomeAboutMeBusinessAttention";

type HomeAboutMeDetailsProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

function HomeAboutMeDetails(props: HomeAboutMeDetailsProps) {
  const css = getHomeAboutMeDetailsCss();

  return (
    <div css={css.root} {...props}>
      <HomeAboutMeBusinessAttention />

      <HomeAboutMeSkills />
    </div>
  );
}

export default HomeAboutMeDetails;
