/** @jsxImportSource @emotion/react */

"use client";

import { Button } from "@/_components/Button";
import { Link } from "@/_components/Link";
import { Logo } from "@/_components/Logo";
import { Typography } from "@/_components/Typography";
import { useTheme } from "@mui/material";
import React from "react";
import getFooterCss from "./getFooterCss";

export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

function Footer(props: FooterProps) {
  const theme = useTheme();
  const css = getFooterCss(theme);

  return (
    <footer {...props}>
      <div css={css.content}>
        <div css={css.navMenu}>
          <div className="flow-spacer-y" css={css.trademark}>
            <div>
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div>
              <Typography variant="body2Medium">Web developer</Typography>
            </div>
          </div>

          <div>
            <ul className="flow-spacer-y" css={css.navList}>
              <li>
                <Link href="/works" variant="body2Medium">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/insights" variant="body2Medium">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about-me" variant="body2Medium">
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flow-spacer-y" css={css.contact}>
          <div className="flow-spacer-y" css={css.letsTalk}>
            <div className="flow-spacer-y" css={css.letsTalkText}>
              <div>
                <Typography variant="body1Medium" fontWeight="medium">
                  Have a project?
                </Typography>
              </div>

              <div>
                <Typography variant="h5" fontWeight="semi-bold">
                  Let's talk with me
                </Typography>
              </div>
            </div>

            <div>
              <Button
                href="/contact"
                variant="contained"
                color="secondary"
                size="sm"
              >
                Talk With Me
              </Button>
            </div>
          </div>

          <div className="flow-spacer-x" css={css.localTime}>
            <Typography component="span" variant="caption">
              My local time
            </Typography>

            <Typography component="span" variant="body2Medium">
              00:00:00
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
