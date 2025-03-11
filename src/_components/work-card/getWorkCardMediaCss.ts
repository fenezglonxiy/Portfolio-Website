import { cardMediaClasses, css, Theme } from "@mui/material";

const getWorkCardMediaCss = (theme: Theme) => css`
  height: 340px;
  padding: ${theme.spacing(5)} ${theme.spacing(5)} 0;

  .${cardMediaClasses.root} {
    border-radius: var(--card-media-border-radius)
      var(--card-media-border-radius) 0 0;
  }

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    height: 240px;
  }
`;

export default getWorkCardMediaCss;
