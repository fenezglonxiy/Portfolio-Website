/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import getHomeAboutMeBusinessAttentionCss from "./getHomeAboutMeBusinessAttentionCss";
import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { ArrowRightIcon } from "@/_icons";

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
          size="md"
          shape="pill"
          iconPosition="end"
          icon={<ArrowRightIcon size="md" />}
        >
          About Me
        </Button>
      </div>
    </div>
  );
}

export default HomeAboutMeBusinessAttention;
