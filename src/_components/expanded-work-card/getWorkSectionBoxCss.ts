import { css, Theme } from "@mui/material";

const getWorkSectionBoxCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

export default getWorkSectionBoxCss;
