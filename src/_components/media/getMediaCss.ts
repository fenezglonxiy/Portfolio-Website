import { css, Theme } from "@mui/material";

import { MediaProps } from "./Media";

const getMediaCss = (theme: Theme, props: MediaProps) => css`
  width: ${props.fullWidth ? "100%" : undefined};
  border-radius: ${theme.shape[
    props.borderRadius as NonNullable<MediaProps["borderRadius"]>
  ]};
  object-fit: cover;
`;

export default getMediaCss;
