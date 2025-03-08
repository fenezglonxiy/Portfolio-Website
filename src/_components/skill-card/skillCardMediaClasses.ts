import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillCardMediaClasses {
  /**
   * Styles applied to the SkillCardMediaRoot component.
   */
  root: string;
}

export type SkillCardMediaClassKey = keyof SkillCardMediaClasses;

export function getSkillCardMediaUtilityClass(slot: string) {
  return generateUtilityClass("PwSkillCardMedia", slot);
}

const skillCardMediaClasses: SkillCardMediaClasses = generateUtilityClasses(
  "PwSkillCardMedia",
  ["root"]
);

export default skillCardMediaClasses;
