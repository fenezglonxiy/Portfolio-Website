import { css, Theme } from "@mui/material";

const getTimelineContentCss = (theme: Theme) => css`
  flex: 1;
  padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
`;

export default getTimelineContentCss;
