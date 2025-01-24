/** @jsxImportSource @emotion/react */

"use client";

import { Button } from "@/_components/Button";
import { Typography } from "@/_components/Typography";

import getWorkDetailsOtherWorksHeaderCss from "./getWorkDetailsOtherWorksHeaderCss";

export type WorkDetailsOtherWorksHeaderProps =
  React.HTMLAttributes<HTMLDivElement> & {
    children?: undefined | null;
  };

function WorkDetailsOtherWorksHeader(props: WorkDetailsOtherWorksHeaderProps) {
  const css = getWorkDetailsOtherWorksHeaderCss();

  return (
    <div css={css} {...props}>
      <div>
        <Typography variant="h3" fontWeight="semi-bold">
          What's next?
        </Typography>
      </div>

      <div>
        <Button href="/works" variant="outlined" color="primary" size="large">
          View All Works
        </Button>
      </div>
    </div>
  );
}

export default WorkDetailsOtherWorksHeader;
