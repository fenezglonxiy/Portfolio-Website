/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkShowcaseCardTextCss from "./getWorkShowcaseCardTextCss";

export type WorkShowcaseCardTextProps = React.ComponentPropsWithoutRef<"div">;

function WorkShowcaseCardText(props: WorkShowcaseCardTextProps) {
  const theme = useTheme();
  const css = getWorkShowcaseCardTextCss(theme);

  return <div css={css} {...props} />;
}

export default WorkShowcaseCardText;
