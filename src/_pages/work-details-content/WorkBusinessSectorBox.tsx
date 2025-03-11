/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkBusinessSectorBoxCss from "./getWorkBusinessSectorBoxCss";

export type WorkBusinessSectorBoxProps = React.ComponentPropsWithoutRef<"div">;

function WorkBusinessSectorBox(props: WorkBusinessSectorBoxProps) {
  const theme = useTheme();
  const css = getWorkBusinessSectorBoxCss(theme);

  return <div css={css} {...props} />;
}

export default WorkBusinessSectorBox;
