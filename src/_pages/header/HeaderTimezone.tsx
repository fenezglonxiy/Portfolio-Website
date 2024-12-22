/** @jsxImportSource @emotion/react */

"use client";

import { Typography } from "@/_components/Typography";
import { useTheme } from "@mui/material";
import React from "react";
import getHeaderTimezoneCss from "./getHeaderTimezoneCss";

type HeaderTimezoneProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderTimezone(props: HeaderTimezoneProps) {
  const theme = useTheme();
  const css = getHeaderTimezoneCss(theme);

  return (
    <div css={css.root} {...props}>
      <div>
        <Typography variant="caption" fontWeight="medium" color="neutral-550">
          Ho Chi Minh City, Vietnam
        </Typography>
      </div>

      <div>
        <Typography variant="body1" fontWeight="medium">
          00:00:00
        </Typography>
      </div>
    </div>
  );
}

export default HeaderTimezone;
