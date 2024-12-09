import { css, Theme } from "@mui/material";

const getCardMediaCss = (theme: Theme) => css`
  border-radius: ${theme.shape.md};
`;

export default getCardMediaCss;
