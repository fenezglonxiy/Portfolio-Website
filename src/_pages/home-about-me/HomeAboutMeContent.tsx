/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAboutMeContentCss from "./getHomeAboutMeContentCss";

type HomeAboutMeContentProps = React.HTMLAttributes<HTMLDivElement>;

function HomeAboutMeContent(props: HomeAboutMeContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getHomeAboutMeContentCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.container} className="flow-spacer-y">
        {children}
      </div>
    </div>
  );
}

export default HomeAboutMeContent;
