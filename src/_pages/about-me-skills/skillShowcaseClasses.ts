import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SkillShowcaseClasses {
  /**
   * Styles applied to the SkillShowcaseRoot component.
   */
  root: string;
}

export type SkillShowcaseClassKey = keyof SkillShowcaseClasses;

export function getSkillShowcaseUtilityClass(slot: string): string {
  return generateUtilityClass("PwAboutMeSkillShowcase", slot);
}

const skillShowcaseClasses: SkillShowcaseClasses = generateUtilityClasses(
  "PwAboutMeSkillShowcase",
  ["root"]
);

export default skillShowcaseClasses;
