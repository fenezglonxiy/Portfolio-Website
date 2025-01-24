/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getTopicInsightPageCss from "./getTopicInsightPageCss";

export type TopicInsightPageProps = React.ComponentPropsWithoutRef<"div">;

function TopicInsightPage(props: TopicInsightPageProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getTopicInsightPageCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.content}>{children}</div>
    </div>
  );
}

export default TopicInsightPage;
