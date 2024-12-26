import { css, Theme } from "@mui/material";

import { CardMediaProps } from "./CardMedia";

const getCardMediaCss = (theme: Theme, props: CardMediaProps) => css`
  border-radius: ${theme.shape[
    props.shape as NonNullable<CardMediaProps["shape"]>
  ]};
`;

export default getCardMediaCss;
