import { css } from "@mui/material";

const getInsightTitleCss = () => css`
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default getInsightTitleCss;
