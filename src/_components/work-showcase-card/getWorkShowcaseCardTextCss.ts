import { css, Theme } from "@mui/material";

const getWorkShowcaseCardTextCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

export default getWorkShowcaseCardTextCss;
