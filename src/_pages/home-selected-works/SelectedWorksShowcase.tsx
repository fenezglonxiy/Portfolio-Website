/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getSelectedWorksShowcaseCss from "./getSelectedWorksShowcaseCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function SelectedWorksShowcase(props: Props) {
  const theme = useTheme();
  const css = getSelectedWorksShowcaseCss(theme);

  return <div css={css} {...props} />;
}

export default SelectedWorksShowcase;
