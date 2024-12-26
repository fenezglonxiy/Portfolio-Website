/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeInsightsContentCss from "./getHomeInsightsContentCss";

export type HomeInsightsContentProps = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsContent(props: HomeInsightsContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getHomeInsightsContentCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div className="flow-spacer-y" css={css.container}>
        {children}
      </div>
    </div>
  );
}

export default HomeInsightsContent;
