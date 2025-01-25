import { css, Theme } from "@mui/material";

const getInsightDetailsContainerRootCss = () => css`
  display: flex;
  justify-content: center;
`;

const getInsightDetailsContainerInnerCss = (theme: Theme) => css`
  max-width: 680px;
  margin: 0 ${theme.spacing(6)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};
`;

const getInsightDetailsContainerCss = (theme: Theme) => ({
  root: getInsightDetailsContainerRootCss(),
  inner: getInsightDetailsContainerInnerCss(theme),
});

export default getInsightDetailsContainerCss;
