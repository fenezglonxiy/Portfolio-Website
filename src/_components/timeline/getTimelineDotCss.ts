import { css, Theme } from "@mui/material";

const getTimelineDotCss = (theme: Theme) => css`
  align-self: baseline;
  padding: ${theme.spacing(1)};
  margin: ${theme.spacing(2.875)} 0;
  border: 2px solid transparent;
  border-radius: 50%;
  background-color: ${theme.palette.neutral[500]};
`;

export default getTimelineDotCss;
