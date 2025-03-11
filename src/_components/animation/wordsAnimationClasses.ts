import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface WordsAnimationClasses {
  /**
   * Styles applied to the WordsAnimationRoot component.
   */
  root: string;
}

export type WordsAnimationClassKey = keyof WordsAnimationClasses;

export function getWordsAnimationUtilityClass(slot: string) {
  return generateUtilityClass("PwWordsAnimation", slot);
}

const wordsAnimationClasses: WordsAnimationClasses = generateUtilityClasses(
  "PwWordsAnimation",
  ["root"]
);

export default wordsAnimationClasses;
