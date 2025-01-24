import { css, Theme } from "@mui/material";

const getInsightDetailsHeroContainerCss = (theme: Theme) => css`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(16)};
`;

export default getInsightDetailsHeroContainerCss;
