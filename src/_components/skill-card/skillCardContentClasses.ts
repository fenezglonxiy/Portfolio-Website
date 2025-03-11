import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillCardContentClasses {
  /**
   * Styles applied to the SkillCardContentRoot component.
   */
  root: string;
}

export type SkillCardContentClassKey = keyof SkillCardContentClasses;

export function generateSkillCardContentUtilityClass(slot: string) {
  return generateUtilityClass("PwSkillCardContent", slot);
}

const skillCardContentClasses: SkillCardContentClasses = generateUtilityClasses(
  "PwSkillCardContent",
  ["root"]
);

export default skillCardContentClasses;
