"use client";

import React from "react";

import { awards, workExperience } from "@/dummyData";

import AboutMeAchievementsContent from "./AboutMeAchievementsContent";
import AboutMeAchievementsContainer from "./AboutMeAchievementsContainer";
import AchievementShowcase from "./AchievementShowcase";
import AchievementShowcaseTitle from "./AchievementShowcaseTitle";
import AchievementShowcaseContent from "./AchievementShowcaseContent";
import AchievementShowcaseItem from "./AchievementShowcaseItem";
import AchievementShowcaseDivider from "./AchievementShowcaseDivider";

export type AboutMeAchievementsProps =
  React.ComponentPropsWithoutRef<"section"> & {
    children?: undefined | null;
  };

function AboutMeAchievements(props: AboutMeAchievementsProps) {
  return (
    <section {...props}>
      <AboutMeAchievementsContent>
        <AboutMeAchievementsContainer>
          <AchievementShowcase>
            <AchievementShowcaseTitle>Work Experience</AchievementShowcaseTitle>

            <AchievementShowcaseContent>
              {workExperience.map((we, idx) => (
                <React.Fragment key={idx}>
                  <AchievementShowcaseItem
                    metadata={{
                      title: we.title,
                      achievementDate: we.achievementDate,
                      expiryDate: we.expiryDate,
                      referenceHref: we.referenceHref,
                    }}
                  />

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
                  <AchievementShowcaseItem
                    metadata={{
                      title: award.title,
                      achievementDate: award.achievementDate,
                      expiryDate: award.expiryDate,
                      referenceHref: award.referenceHref,
                    }}
                  />

                  {idx < awards.length - 1 && <AchievementShowcaseDivider />}
                </React.Fragment>
              ))}
            </AchievementShowcaseContent>
          </AchievementShowcase>
        </AboutMeAchievementsContainer>
      </AboutMeAchievementsContent>
    </section>
  );
}

export default AboutMeAchievements;
