/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getContactFormCTABoxCss from "./getContactFormCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function ContactFormCTABox(props: Props) {
  const theme = useTheme();
  const css = getContactFormCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default ContactFormCTABox;
