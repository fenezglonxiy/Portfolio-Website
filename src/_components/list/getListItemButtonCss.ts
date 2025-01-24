import { css, Theme } from "@mui/material";

const getListItemButtonCss = (theme: Theme) => css`
  padding: 0;
  color: ${theme.palette.slate[500]};

  &:hover {
    background-color: unset;
    color: ${theme.palette.slate[800]};
  }
`;

export default getListItemButtonCss;
