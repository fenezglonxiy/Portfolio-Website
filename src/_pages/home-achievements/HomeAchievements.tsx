/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { useTheme } from "@mui/material";

import { awards, workExperience } from "@/dummyData";

import getHomeAchievementsCss from "./getHomeAchievementsCss";
import HomeAchievementsContent from "./HomeAchievementsContent";
import HomeAchievementsContainer from "./HomeAchievementsContainer";
import AchievementShowcase from "./AchievementShowcase";
import AchievementShowcaseTitle from "./AchievementShowcaseTitle";
import AchievementShowcaseContent from "./AchievementShowcaseContent";
import AchievementShowcaseItem from "./AchievementShowcaseItem";
import AchievementShowcaseDivider from "./AchievementShowcaseDivider";

type Props = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

function HomeAchievements(props: Props) {
  const theme = useTheme();
  const css = getHomeAchievementsCss(theme);

  return (
    <section css={css} {...props}>
      <HomeAchievementsContent>
        <HomeAchievementsContainer>
          <AchievementShowcase>
            <AchievementShowcaseTitle>Work Experience</AchievementShowcaseTitle>

            <AchievementShowcaseContent>
              {workExperience.map((we, idx) => (
                <React.Fragment key={idx}>
                  <AchievementShowcaseItem metadata={we} />

                  {idx < workExperience.length - 1 && (
                    <AchievementShowcaseDivider />
                  )}
                </React.Fragment>
              ))}
            </AchievementShowcaseContent>
          </AchievementShowcase>

          <AchievementShowcase>
            <AchievementShowcaseTitle>
              Awards & Recognition
            </AchievementShowcaseTitle>

            <AchievementShowcaseContent>
              {awards.map((award, idx) => (
                <React.Fragment key={idx}>
                  <AchievementShowcaseItem metadata={award} />

                  {idx < awards.length - 1 && <AchievementShowcaseDivider />}
                </React.Fragment>
              ))}
            </AchievementShowcaseContent>
          </AchievementShowcase>
        </HomeAchievementsContainer>
      </HomeAchievementsContent>
    </section>
  );
}

export default HomeAchievements;
