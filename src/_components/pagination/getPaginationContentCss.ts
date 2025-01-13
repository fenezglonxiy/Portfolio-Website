import { css, Theme } from "@mui/material";

const getPaginationContentCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`;

export default getPaginationContentCss;
