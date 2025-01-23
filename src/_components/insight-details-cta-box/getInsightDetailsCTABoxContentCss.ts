import { css, Theme } from "@mui/material";

const getInsightDetailsCTABoxContentCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0.75)} ${theme.spacing(2)};
  border-top: 1px solid ${theme.palette.slate[200]};
  border-bottom: 1px solid ${theme.palette.slate[200]};
`;

export default getInsightDetailsCTABoxContentCss;
