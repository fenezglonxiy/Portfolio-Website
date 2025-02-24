/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkSectionBoxCss from "./getWorkSectionBoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkSectionBox(props: Props) {
  const theme = useTheme();
  const css = getWorkSectionBoxCss(theme);

  return <div css={css} {...props} />;
}

export default WorkSectionBox;
