import { css, Theme } from "@mui/material";

const getTimelineConnectorCss = (theme: Theme) => css`
  width: 2px;
  flex-grow: 1;
  background-color: ${theme.palette.neutral[500]};
`;

export default getTimelineConnectorCss;
