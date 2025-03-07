import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillDescriptionBoxClasses {
  /**
   * Styles applied to the SkillDescriptionBox component.
   */
  root: string;
}

export type SkillDescriptionBoxClassKey = keyof SkillDescriptionBoxClasses;

export function getSkillDescriptionBoxUtilityClass(slot: string) {
  return generateUtilityClass("PwSkillCardSkillDescriptionBox", slot);
}

const skillDescriptionBoxClasses: SkillDescriptionBoxClasses =
  generateUtilityClasses("PwSkillCardSkillDescriptionBox", ["root"]);

export default skillDescriptionBoxClasses;
