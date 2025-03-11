/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getContactFormSectionContentCss from "./getContactFormSectionContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function ContactFormSectionContent(props: Props) {
  const theme = useTheme();
  const css = getContactFormSectionContentCss(theme);

  return <div css={css} {...props} />;
}

export default ContactFormSectionContent;
