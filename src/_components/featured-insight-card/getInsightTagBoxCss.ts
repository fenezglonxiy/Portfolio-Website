import { css, Theme } from "@mui/material";

const getInsightTagBoxCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  margin-left: auto;
`;

export default getInsightTagBoxCss;
