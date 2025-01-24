/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsContainerCss from "./getWorkDetailsContainerCss";

export type WorkDetailsContainerProps = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsContainer(props: WorkDetailsContainerProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsContainerCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.inner}>{children}</div>
    </div>
  );
}

export default WorkDetailsContainer;
