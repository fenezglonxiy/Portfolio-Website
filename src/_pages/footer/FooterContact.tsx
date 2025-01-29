/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getFooterContactCss from "./getFooterContactCss";

export type FooterContactProps = React.ComponentPropsWithoutRef<"div">;

function FooterContact(props: FooterContactProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getFooterContactCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default FooterContact;
