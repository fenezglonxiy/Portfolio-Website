/** @jsxImportSource @emotion/react */

"use client";

import clsx from "clsx";
import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const LocalTime = dynamic(() => import("@/_components/local-time/LocalTime"), {
  ssr: false,
});
import { Typography } from "@/_components/Typography";

import getFooterLocalTimeCss from "./getFooterLocalTimeCss";

export type FooterLocalTimeProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
>;

function FooterLocalTime(props: FooterLocalTimeProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getFooterLocalTimeCss(theme);

  return (
    <div className={clsx("flow-spacer-x", className)} css={css} {...rest}>
      <Typography component="span" variant="caption">
        My local time
      </Typography>

      <LocalTime />
    </div>
  );
}

export default FooterLocalTime;
