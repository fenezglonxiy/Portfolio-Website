import { css, Theme } from "@mui/material";

const getInsightDetailsCTABoxRightColumnCss = (theme: Theme) => css`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(6)};
`;

export default getInsightDetailsCTABoxRightColumnCss;
