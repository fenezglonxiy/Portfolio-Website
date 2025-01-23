import { css, Theme } from "@mui/material";

const getOtherInsightsCTABoxCss = (theme: Theme) => css`
  text-align: center;
  padding-top: ${theme.spacing(6)};
  border-top: 1px solid ${theme.palette.neutral[250]};
`;

export default getOtherInsightsCTABoxCss;
