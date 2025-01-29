import { addMilliseconds, format, Locale } from "date-fns";
import { vi } from "date-fns/locale";
import React from "react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

type RunningTimeHookParams = {
  /**
   * The interval in milliseconds to make a run. In each run, the time
   * increases an amount as the interval.
   *
   * @default 1000
   */
  interval?: number;

  /**
   * The options to format the time.
   */
  formatOptions?: {
    /**
     * The format pattern.
     *
     * @default "HH:mm:ss"
     */
    formatStr?: string;

    /**
     * The locale for the time.
     *
     * @default vi
     */
    locale?: Locale;
  };
};

const useRunningTime = (params?: RunningTimeHookParams) => {
  const interval = params?.interval ? params.interval : 1000;
  const formatOptions = params?.formatOptions
    ? params.formatOptions
    : { formatStr: "HH:mm:ss", locale: vi };
  const [time, setTime] = React.useState(new Date());

  useIsomorphicLayoutEffect(() => {
    const id = setInterval(() => {
      setTime(addMilliseconds(time, interval));
    }, interval);

    return () => clearInterval(id);
  }, []);

  return {
    time,
    timeString: format(time, formatOptions.formatStr as string, {
      locale: formatOptions.locale,
    }),
  };
};

export default useRunningTime;
