import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface AboutMeSkillsContentClasses {
  /**
   * Styles applied to the AboutMeSkillsContentRoot component.
   */
  root: string;
}

export type AboutMeSkillsContentClassKey = keyof AboutMeSkillsContentClasses;

export function getAboutMeSkillsContentUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillsContent", slot);
}

const aboutMeSkillsContentClasses: AboutMeSkillsContentClasses =
  generateUtilityClasses("PwAboutMeSkillsContent", ["root"]);

export default aboutMeSkillsContentClasses;
