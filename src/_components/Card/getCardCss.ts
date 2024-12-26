import { css, Theme } from "@mui/material";

import { CardProps } from "./Card";

const getCardCss = (theme: Theme, props: CardProps) => css`
  border-radius: ${theme.shape[props.shape as NonNullable<CardProps["shape"]>]};
`;

export default getCardCss;
