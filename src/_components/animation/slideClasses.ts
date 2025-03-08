import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface SlideClasses {
  /**
   * Styles applied to the SlideRoot component.
   */
  root: string;

  /**
   * Styles applied to the SlideContent component.
   */
  content: string;
}

export type SlideClassKey = keyof SlideClasses;

export function getSlideUtilityClass(slot: string) {
  return generateUtilityClass("PwSlideAnimation", slot);
}

const slideClasses: SlideClasses = generateUtilityClasses("PwSlideAnimation", [
  "root",
  "content",
]);

export default slideClasses;
