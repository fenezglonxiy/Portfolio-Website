import { css, Theme } from "@mui/material";

import { PaperProps } from "./Paper";

const getPaperCss = (theme: Theme, props: PaperProps) => css`
  border-radius: ${theme.shape[
    props.borderRadius as NonNullable<PaperProps["borderRadius"]>
  ]};
`;

export default getPaperCss;
