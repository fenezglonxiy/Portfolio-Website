import generateUtilityClass from "@/_utils/generateUtilityClass";
import generateUtilityClasses from "@/_utils/generateUtilityClasses";

export interface PageTransitionClasses {
  /**
   * Styles applied to the root element.
   */
  root: string;

  /**
   * Styles applied to the PageTransitionRow component.
   */
  row: string;

  /**
   * Styles applied to the first PageTransitionRow component.
   */
  firstRow: string;

  /**
   * Styles applied to the second PageTransitionRow component.
   */
  secondRow: string;

  /**
   * Styles applied to the PageTransitionBlock component.
   */
  block: string;
}

export type PageTransitionClassKey = keyof PageTransitionClasses;

export function getPageTransitionUtilityClass(slot: string): string {
  return generateUtilityClass("PwPageTransition", slot);
}

const pageTransitionClasses: PageTransitionClasses = generateUtilityClasses(
  "PwPageTransition",
  ["root", "row", "firstRow", "secondRow", "block"]
);

export default pageTransitionClasses;
