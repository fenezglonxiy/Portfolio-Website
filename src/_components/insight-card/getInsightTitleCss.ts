import { css } from "@mui/material";

const getInsightTitleCss = () => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default getInsightTitleCss;
