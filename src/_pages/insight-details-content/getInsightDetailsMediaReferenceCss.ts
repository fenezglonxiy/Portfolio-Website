import { css, Theme } from "@mui/material";

const getInsightDetailsMediaReferenceCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

export default getInsightDetailsMediaReferenceCss;
