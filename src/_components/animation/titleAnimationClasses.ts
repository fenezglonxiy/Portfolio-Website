import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface TitleAnimationClasses {
  /**
   * Styles applied to the TitleAnimationRoot component.
   */
  root: string;
}

export type TitleAnimationClassKey = keyof TitleAnimationClasses;

export function getTitleAnimationUtilityClass(slot: string) {
  return generateUtilityClass("PwTitleAnimation", slot);
}

const titleAnimationClasses: TitleAnimationClasses = generateUtilityClasses(
  "PwTitleAnimation",
  ["root"]
);

export default titleAnimationClasses;
