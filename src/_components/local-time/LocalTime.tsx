import { useNow } from "next-intl";
import { format, secondsToMilliseconds } from "date-fns";
import { vi } from "date-fns/locale";

import { Typography, TypographyProps } from "@/_components/Typography";

export type LocalTimeProps = Omit<TypographyProps, "children">;

function LocalTime(props: LocalTimeProps) {
  const now = useNow({
    updateInterval: secondsToMilliseconds(1),
  });
  const nowStr = format(now, "HH:mm:ss", {
    locale: vi,
  });

  return (
    <Typography component="span" variant="body1" fontWeight="medium" {...props}>
      {nowStr}
    </Typography>
  );
}

export default LocalTime;
