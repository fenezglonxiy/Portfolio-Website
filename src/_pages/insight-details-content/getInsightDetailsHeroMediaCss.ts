import { css, Theme } from "@mui/material";

const getInsightDetailsHeroMediaCss = (theme: Theme) => css`
  margin-top: ${theme.spacing(10)};

  & > * {
    width: 700px;
    height: 383px;
  }
`;

export default getInsightDetailsHeroMediaCss;
