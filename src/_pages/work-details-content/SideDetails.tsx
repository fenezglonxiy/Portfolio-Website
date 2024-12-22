/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getSideDetailsCss from "./getSideDetailsCss";

export type SideDetailsProps = React.ComponentPropsWithoutRef<"aside">;

function SideDetails(props: SideDetailsProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getSideDetailsCss(theme);

  return (
    <aside css={css.root} {...rest}>
      <ul css={css.container} className="flow-spacer-y">
        {children}
      </ul>
    </aside>
  );
}

export default SideDetails;
