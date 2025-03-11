import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface LinesAnimationClasses {
  /**
   * Styles applied to the LinesAnimationRoot component.
   */
  root: string;
}

export type LinesAnimationClassKey = keyof LinesAnimationClasses;

export function getLinesAnimationUtilityClass(slot: string) {
  return generateUtilityClass("PwLinesAnimation", slot);
}

const linesAnimationClasses: LinesAnimationClasses = generateUtilityClasses(
  "PwLinesAnimation",
  ["root"]
);

export default linesAnimationClasses;
