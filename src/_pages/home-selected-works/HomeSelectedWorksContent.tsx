/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getHomeSelectedWorksContentCss from "./getHomeSelectedWorksContentCss";

export type HomeSelectedWorksContentProps =
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Override or extends the styles applied to the component.
     */
    classes?: {
      root?: string;
      container?: string;
    };
  };

function HomeSelectedWorksContent(props: HomeSelectedWorksContentProps) {
  const { children, classes, className, ...rest } = props;
  const theme = useTheme();
  const css = getHomeSelectedWorksContentCss(theme);

  return (
    <div css={css.root} className={clsx(classes?.root, className)} {...rest}>
      <div
        css={css.container}
        className={clsx("flow-spacer-y", classes?.container)}
      >
        {children}
      </div>
    </div>
  );
}

export default HomeSelectedWorksContent;
