import { css, Theme } from "@mui/material";

import { CardMediaProps } from "./CardMedia";

const getCardMediaMediaCss = (
  theme: Theme,
  borderRadius: CardMediaProps["borderRadius"]
) => css`
  height: 100%;
  border-radius: ${theme.shape[
    borderRadius as NonNullable<CardMediaProps["borderRadius"]>
  ]};
`;

const getCardMediaCss = (theme: Theme, props: CardMediaProps) => ({
  media: getCardMediaMediaCss(theme, props.borderRadius),
});

export default getCardMediaCss;
