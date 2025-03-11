/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getSideDetailsCss from "./getSideDetailsCss";

export type SideDetailsProps = React.ComponentPropsWithoutRef<"aside">;

function SideDetails(props: SideDetailsProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getSideDetailsCss(theme);

  return (
    <aside {...rest}>
      <ul css={css.content}>{children}</ul>
    </aside>
  );
}

export default SideDetails;
