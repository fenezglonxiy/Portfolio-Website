/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getExpandedWorkCardTextCss from "./getExpandedWorkCardTextCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function ExpandedWorkCardText(props: Props) {
  const theme = useTheme();
  const css = getExpandedWorkCardTextCss(theme);

  return <div css={css} {...props} />;
}

export default ExpandedWorkCardText;
