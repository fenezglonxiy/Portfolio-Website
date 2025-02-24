/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorksShowcaseContentCss from "./getWorksShowcaseContentCss";

type Props = React.HTMLAttributes<HTMLDivElement>;

function WorksShowcaseContent(props: Props) {
  const theme = useTheme();
  const css = getWorksShowcaseContentCss(theme);

  return <div css={css} {...props} />;
}

export default WorksShowcaseContent;
