import { css, Theme } from "@mui/material";

const getInsightCardContentCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export default getInsightCardContentCss;
