/**
 * Reference: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
 *
 * Custom hook that uses either `useLayoutEffect` or `useEffect` based on the
 * environment (client-side or server-side).
 */

import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
