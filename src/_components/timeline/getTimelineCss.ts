import { css, Theme } from "@mui/material";

const getTimelineCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
`;

export default getTimelineCss;
