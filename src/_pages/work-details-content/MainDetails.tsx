/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getMainDetailsCss from "./getMainDetailsCss";

export type MainDetailsProps = React.ComponentPropsWithoutRef<"main">;

function MainDetails(props: MainDetailsProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getMainDetailsCss(theme);

  return (
    <main {...rest}>
      <ul css={css.container} className="flow-spacer-y">
        {children}
      </ul>
    </main>
  );
}

export default MainDetails;
