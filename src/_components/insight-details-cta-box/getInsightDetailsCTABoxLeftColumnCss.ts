import { css, Theme } from "@mui/material";

const getInsightDetailsCTABoxLeftColumnCss = (theme: Theme) => css`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(6)};
`;

export default getInsightDetailsCTABoxLeftColumnCss;
