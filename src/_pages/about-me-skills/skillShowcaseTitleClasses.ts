import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillShowcaseTitleClasses {
  /**
   * Styles applied to the SkillShowcaseTitleRoot component.
   */
  root: string;
}

export type SkillShowcaseTitleClassKey = keyof SkillShowcaseTitleClasses;

export function getSkillShowcaseTitleUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillShowcaseTitle", slot);
}

const skillShowcaseTitleClasses: SkillShowcaseTitleClasses =
  generateUtilityClasses("PwAboutMeSkillShowcaseTitle", ["root"]);

export default skillShowcaseTitleClasses;
