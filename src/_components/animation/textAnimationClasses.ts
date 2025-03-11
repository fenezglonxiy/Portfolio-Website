import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface TextAnimationClasses {
  /**
   * Styles applied to the TextAnimationRoot component.
   */
  root: string;

  /**
   * Styles applied to the line box slot created by splitting text into line
   * boxes.
   */
  lineBox: string;

  /**
   * Styles applied to the line slot created by splitting text into lines.
   */
  line: string;

  /**
   * Styles applied to the word slot created by splitting text into words.
   */
  word: string;

  /**
   * Styles applied to the char slot created by splitting text into chars.
   */
  char: string;
}

export type TextAnimationClassKey = keyof TextAnimationClasses;

export function getTextAnimationUtilityClass(slot: string) {
  return generateUtilityClass("PwTextAnimation", slot);
}

const textAnimationClasses: TextAnimationClasses = generateUtilityClasses(
  "PwTextAnimation",
  ["root", "content", "lineBox", "line", "word", "char"]
);

export default textAnimationClasses;
