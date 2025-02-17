import { css, Theme } from "@mui/material";

const getHomeTestimonialsContentCss = (theme: Theme) => css`
  padding-bottom: ${theme.spacing(30)};

  & .swiper {
    padding-inline: ${theme.spacing(18)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding-bottom: ${theme.spacing(18)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    & .swiper {
      padding-inline: ${theme.spacing(10)};
    }
  }
`;

export default getHomeTestimonialsContentCss;
