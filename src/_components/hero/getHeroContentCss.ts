import { css, Theme } from "@mui/material";

import { HeroContentProps } from "./HeroContent";

const getHeroContentCss = (theme: Theme, props: HeroContentProps) => css`
  max-width: 1440px;
  margin: 0 auto;
  --flow-spacing-y: ${theme.spacing(
    props.verticalSpacing as NonNullable<number>
  )};
  padding: ${theme.spacing(20)} ${theme.spacing(18)} ${theme.spacing(35)};
`;

export default getHeroContentCss;
