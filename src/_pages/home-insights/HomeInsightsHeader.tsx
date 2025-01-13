/** @jsxImportSource @emotion/react */

"use client";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";

import getHomeInsightsHeaderCss from "./getHomeInsightsHeaderCss";

export type HomeInsightsHeaderProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
>;

function HomeInsightsHeader(props: HomeInsightsHeaderProps) {
  const css = getHomeInsightsHeaderCss();

  return (
    <div css={css} {...props}>
      <div>
        <Typography variant="h3" color="neutral-800" fontWeight="semi-bold">
          Insights
        </Typography>
      </div>

      <div>
        <Button href="/insights" variant="outlined" size="large">
          View All Insights
        </Button>
      </div>
    </div>
  );
}

export default HomeInsightsHeader;
