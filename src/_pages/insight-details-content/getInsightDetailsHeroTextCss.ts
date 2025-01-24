import { css, Theme } from "@mui/material";

const getInsightDetailsHeroTextCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing(6)};
  margin: ${theme.spacing(11)} 0 0;
`;

export default getInsightDetailsHeroTextCss;
