import { css, Theme } from "@mui/material";

const getInsightTitleCss = (theme: Theme) => css`
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  ${theme.typography.h6};
  color: ${theme.palette.common.white};

  &:hover,
  &:focus {
    color: ${theme.palette.neutral[400]};
  }
`;

export default getInsightTitleCss;
