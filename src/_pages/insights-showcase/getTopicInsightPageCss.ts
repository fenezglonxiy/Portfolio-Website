import { css, Theme } from "@mui/material";

const getTopicInsightPageRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(16)} 0;
`;

const getTopicInsightPageContentCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${theme.spacing(5)};
  row-gap: ${theme.spacing(9)};
`;

const getTopicInsightPageCss = (theme: Theme) => ({
  root: getTopicInsightPageRootCss(theme),
  content: getTopicInsightPageContentCss(theme),
});

export default getTopicInsightPageCss;
