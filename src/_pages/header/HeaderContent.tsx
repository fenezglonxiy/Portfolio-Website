/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderContentCss from "./getHeaderContentCss";

type HeaderContentProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderContent(props: HeaderContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getHeaderContentCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.container}>{children}</div>
    </div>
  );
}

export default HeaderContent;
