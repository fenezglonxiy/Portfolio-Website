import { css, Theme } from "@mui/material";

const getExpandedWorkCardTextCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

export default getExpandedWorkCardTextCss;
