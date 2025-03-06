import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillDescriptionClasses {
  /**
   * Styles applied to the SkillDescriptionRoot component.
   */
  root: string;
}

export type SkillDescriptionClassKey = keyof SkillDescriptionClasses;

export function getSkillDescriptionUtilityClass(slot: string) {
  return generateUtilityClass("PwSkillCardSkillDescription", slot);
}

const skillDescriptionClasses: SkillDescriptionClasses = generateUtilityClasses(
  "PwSkillCardSkillDescription",
  ["root"]
);

export default skillDescriptionClasses;
