import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillShowcaseContentClasses {
  /**
   * Styles applied to the SkillShowcaseContentRoot component.
   */
  root: string;
}

export type SkillShowcaseContentClassKey = keyof SkillShowcaseContentClasses;

export function getSkillShowcaseContentUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillShowcaseContent", slot);
}

const skillShowcaseContentClasses: SkillShowcaseContentClasses =
  generateUtilityClasses("PwAboutMeSkillShowcaseContent", ["root"]);

export default skillShowcaseContentClasses;
