import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface AboutMeSkillsCTABoxClasses {
  /**
   * Styles applied to the AboutMeSkillsCTABoxRoot component.
   */
  root: string;
}

export type AboutMeSkillsCTABoxClassKey = keyof AboutMeSkillsCTABoxClasses;

export function getAboutMeSkillsCTABoxUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillsCTABox", slot);
}

const aboutMeSkillsCTABoxClasses: AboutMeSkillsCTABoxClasses =
  generateUtilityClasses("PwAboutMeSkillsCTABox", ["root"]);

export default aboutMeSkillsCTABoxClasses;
