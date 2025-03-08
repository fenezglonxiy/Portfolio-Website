import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillListClasses {
  /**
   * Styles applied to the SkillListRoot component.
   */
  root: string;
}

export type SkillListClassKey = keyof SkillListClasses;

export function getSkillListUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillList", slot);
}

const skillListClasses: SkillListClasses = generateUtilityClasses(
  "PwAboutMeSkillList",
  ["root"]
);

export default skillListClasses;
