/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getContactFormCss from "./getContactFormCss";

type Props = React.ComponentPropsWithoutRef<"form">;

function ContactForm(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getContactFormCss(theme);

  return (
    <form css={css} className={clsx("flow-spacer-y", className)} {...rest} />
  );
}

export default ContactForm;
