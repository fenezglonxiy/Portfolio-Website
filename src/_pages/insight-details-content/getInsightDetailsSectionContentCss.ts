import { css, Theme } from "@mui/material";

const getInsightDetailsSectionContentCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
`;

export default getInsightDetailsSectionContentCss;
