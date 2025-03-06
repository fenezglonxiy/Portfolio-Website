import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillCardClasses {
  /**
   * Styles applied to the Root slot.
   */
  root: string;
}

export type SkillCardClassKey = keyof SkillCardClasses;

export function getSkillCardUtilityClass(slot: string): string {
  return generateUtilityClass("PwSkillCard", slot);
}

const skillCardClasses: SkillCardClasses = generateUtilityClasses(
  "PwSkillCard",
  ["root"]
);

export default skillCardClasses;
