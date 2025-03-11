import { css, Theme } from "@mui/material";

const getWorkBusinessSectorBoxCss = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
`;

export default getWorkBusinessSectorBoxCss;
