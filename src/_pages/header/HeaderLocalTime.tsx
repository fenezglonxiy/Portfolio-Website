/** @jsxImportSource @emotion/react */

"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
const LocalTime = dynamic(() => import("@/_components/local-time/LocalTime"), {
  ssr: false,
});

import getHeaderLocalTimeCss from "./getHeaderLocalTimeCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderLocalTime(props: Props) {
  const theme = useTheme();
  const css = getHeaderLocalTimeCss(theme);

  return (
    <div css={css} {...props}>
      <div>
        <Typography variant="caption" fontWeight="medium" color="neutral-550">
          Ho Chi Minh City, Vietnam
        </Typography>
      </div>

      <div>
        <LocalTime />
      </div>
    </div>
  );
}

export default HeaderLocalTime;
