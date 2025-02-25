import { cardContentClasses, css, Theme } from "@mui/material";

const getWorkCardCss = (theme: Theme) => css`
  --card-media-border-radius: ${theme.shape["md"]};
  max-height: 599px;

  ${theme.breakpoints.up(theme.breakpoints.values.xl)} {
    &:hover,
    &:focus-visible {
      .${cardContentClasses.root} {
        transform: translateY(-100px);
      }
    }
  }
`;

export default getWorkCardCss;
