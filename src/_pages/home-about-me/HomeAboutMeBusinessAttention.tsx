/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";

import getHomeAboutMeBusinessAttentionCss from "./getHomeAboutMeBusinessAttentionCss";

function HomeAboutMeBusinessAttention() {
  const theme = useTheme();
  const css = getHomeAboutMeBusinessAttentionCss(theme);

  return (
    <div css={css.root} className="flow-spacer-y">
      <div>
        <Typography variant="body1Medium" color="neutral-700">
          Concentrate on your primary objective in expanding your business, and
          delegate it to me to ensure that your business is efficiently operated
          digitally and distinguishes itself from the competitors.
        </Typography>
      </div>

      <div>
        <Button
          href="/about-me"
          size="md"
          shape="pill"
          iconPosition="end"
          icon={<ArrowRight size="md" />}
        >
          About Me
        </Button>
      </div>
    </div>
  );
}

export default HomeAboutMeBusinessAttention;
