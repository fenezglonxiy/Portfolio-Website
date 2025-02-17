import { css, Theme } from "@mui/material";

const getHomeTestimonialsContentCss = (theme: Theme) => css`
  padding: 0 0 ${theme.spacing(30)};

  & .swiper {
    padding-inline: ${theme.spacing(18)};
  }
`;

export default getHomeTestimonialsContentCss;
