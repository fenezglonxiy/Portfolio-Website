import { css, Theme } from "@mui/material";

const getHeaderLocalTimeCss = (theme: Theme) => css`
  padding-left: ${theme.spacing(7)};
`;

export default getHeaderLocalTimeCss;
