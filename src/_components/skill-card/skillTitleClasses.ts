import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillTitleClasses {
  /**
   * Styles applied to the SkillTitleRoot component.
   */
  root: string;
}

export type SkillTitleClassKey = keyof SkillTitleClasses;

export function getSkillTitleUtilityClass(slot: string) {
  return generateUtilityClass("PwSkillCardSkillTitle", slot);
}

const skillTitleClasses: SkillTitleClasses = generateUtilityClasses(
  "PwSkillCardSkillTitle",
  ["root"]
);

export default skillTitleClasses;
