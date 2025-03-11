import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface CharsAnimationClasses {
  /**
   * Styles applied to the CharsAnimationRoot component.
   */
  root: string;
}

export type CharsAnimationClassKey = keyof CharsAnimationClasses;

export function getCharsAnimationUtilityClass(slot: string) {
  return generateUtilityClass("PwCharsAnimation", slot);
}

const charsAnimationClasses: CharsAnimationClasses = generateUtilityClasses(
  "PwCharsAnimation",
  ["root"]
);

export default charsAnimationClasses;
