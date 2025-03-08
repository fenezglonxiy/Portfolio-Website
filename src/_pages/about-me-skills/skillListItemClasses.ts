import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillListItemClasses {
  /**
   * Styles applied to the SkillListItemRoot component.
   */
  root: string;
}

export type SkillListItemClassKey = keyof SkillListItemClasses;

export function getSkillListItemUtilityClass(slot: string) {
  return generateUtilityClass("PwAboutMeSkillListItem", slot);
}

const skillListItemClasses: SkillListItemClasses = generateUtilityClasses(
  "PwAboutMeSkillListItem",
  ["root"]
);

export default skillListItemClasses;
