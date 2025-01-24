/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsOtherWorksContentCss from "./getWorkDetailsOtherWorksContentCss";

export type WorkDetailsOtherWorksContentProps =
  React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksContent(
  props: WorkDetailsOtherWorksContentProps
) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksContentCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.container} className="flow-spacer-y">
        {children}
      </div>
    </div>
  );
}

export default WorkDetailsOtherWorksContent;
