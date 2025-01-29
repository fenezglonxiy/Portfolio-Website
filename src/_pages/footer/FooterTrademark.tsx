/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Link } from "@/_components/Link";
import { Logo } from "@/_components/Logo";
import { Typography } from "@/_components/Typography";

import getFooterTrademarkCss from "./getFooterTrademarkCss";

export type FooterTrademarkProps = React.ComponentPropsWithoutRef<"div">;

function FooterTrademark(props: FooterTrademarkProps) {
  const theme = useTheme();
  const css = getFooterTrademarkCss(theme);

  return (
    <div className="flow-spacer-y" css={css} {...props}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <Typography variant="body2Medium">Web developer</Typography>
    </div>
  );
}

export default FooterTrademark;
