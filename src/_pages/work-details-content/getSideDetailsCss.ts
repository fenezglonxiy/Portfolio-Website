import { css, Theme } from "@mui/material";


const getSideDetailsContentCss = (theme: Theme) =>
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(8)};
  `;

const getSideDetailsCss = (theme: Theme) => ({
  content: getSideDetailsContentCss(theme),
});

export default getSideDetailsCss;
