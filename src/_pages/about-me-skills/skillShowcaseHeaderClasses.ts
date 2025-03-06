import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillShowcaseHeaderClasses {
  /**
   * Styles applied to the SkillShowcaseHeaderRoot component.
   */
  root: string;
}

export type SkillShowcaseHeaderClassKey = keyof SkillShowcaseHeaderClasses;

export function getSkillShowcaseHeaderUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillShowcaseHeader", slot);
}

const skillShowcaseHeaderClasses: SkillShowcaseHeaderClasses =
  generateUtilityClasses("PwAboutMeSkillShowcaseHeader", ["root"]);

export default skillShowcaseHeaderClasses;
