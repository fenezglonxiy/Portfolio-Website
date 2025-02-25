import { css, Theme } from "@mui/material";

import { CardProps } from "./Card";

const getCardCss = (theme: Theme, props: CardProps) => css`
  position: relative;
  background-color: ${theme.palette.common.white};
  border-radius: ${theme.shape[
    props.borderRadius as NonNullable<CardProps["borderRadius"]>
  ]};
`;

export default getCardCss;
