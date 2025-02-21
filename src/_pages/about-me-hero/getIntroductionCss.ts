import { css, Theme } from "@mui/material";

const getIntroductionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
`;

export default getIntroductionCss;
