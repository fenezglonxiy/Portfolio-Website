import { css, Theme } from "@mui/material";

const getInsightPublishDateCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(3)};
`;

export default getInsightPublishDateCss;
