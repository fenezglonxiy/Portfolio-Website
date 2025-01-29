/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { useNow } from "next-intl";

import { Typography } from "@/_components/Typography";

import getHeaderTimezoneCss from "./getHeaderTimezoneCss";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

type HeaderTimezoneProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderTimezone(props: HeaderTimezoneProps) {
  const now = useNow({
    updateInterval: 1000,
  });
  const theme = useTheme();
  const css = getHeaderTimezoneCss(theme);

  return (
    <div css={css} {...props}>
      <div>
        <Typography variant="caption" fontWeight="medium" color="neutral-550">
          Ho Chi Minh City, Vietnam
        </Typography>
      </div>

      <div>
        <Typography variant="body1" fontWeight="medium">
          {format(now, "HH:mm:ss", {
            locale: vi,
          })}
        </Typography>
      </div>
    </div>
  );
}

export default HeaderTimezone;
