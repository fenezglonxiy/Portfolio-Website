import { css, Theme } from "@mui/material";

const getInsightTitleCss = (theme: Theme) => css`
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  ${theme.typography.subtitle2};
  font-weight: ${theme.typography.fontWeightSemibold};
`;

export default getInsightTitleCss;
