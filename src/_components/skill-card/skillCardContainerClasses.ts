import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillCardContainerClasses {
  /**
   * Styles applied to the SkillCardContainerRoot component.
   */
  root: string;
}

export type SkillCardContainerClassKey = keyof SkillCardContainerClasses;

export function getSkillCardContainerUtilityClass(slot: string) {
  return generateUtilityClass("PwSkillCardContainer", slot);
}

const skillCardContainerClasses: SkillCardContainerClasses =
  generateUtilityClasses("PwSkillCardContainer", ["root"]);

export default skillCardContainerClasses;
