import { css, Theme } from "@mui/material";

const getCardCss = (theme: Theme) => css`
  border-radius: ${theme.shape.md};
`;

export default getCardCss;
