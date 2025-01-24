import { css, Theme } from "@mui/material";

const getSubInsightCardContentCss = (theme: Theme) => css`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(5)};
`;

export default getSubInsightCardContentCss;
