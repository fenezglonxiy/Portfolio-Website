import { css, Theme } from "@mui/material";

import { HeroContainerProps } from "./HeroContainer";

const getHeroContainerCss = (theme: Theme, props: HeroContainerProps) => css`
  max-width: 1440px;
  margin: 0 auto;
  --flow-spacing-y: ${theme.spacing(
    props.verticalSpacing as NonNullable<number>
  )};
  text-align: ${props.textAlign};
`;

export default getHeroContainerCss;
