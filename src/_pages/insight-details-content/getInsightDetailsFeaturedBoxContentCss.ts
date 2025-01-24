import { css, Theme } from "@mui/material";

const getInsightDetailsFeaturedBoxContentCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};
`;

export default getInsightDetailsFeaturedBoxContentCss;
