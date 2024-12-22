/**
 * Reference: https://usehooks-ts.com/react-hook/use-window-size
 *
 * Custom hook that tracks the size of the window.
 */

import React from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import useEventListener from "./useEventListener";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  function handleWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEventListener("resize", handleWindowSize);

  useIsomorphicLayoutEffect(() => {
    handleWindowSize();
  }, []);

  return windowSize;
};

export default useWindowSize;
