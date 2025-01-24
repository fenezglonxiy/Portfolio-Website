import { css, Theme } from "@mui/material";

const getWorksTestimonialsContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(20)} 0 ${theme.spacing(30)};

  & .swiper {
    padding-inline: ${theme.spacing(18)};
  }
`;

export default getWorksTestimonialsContentCss;
