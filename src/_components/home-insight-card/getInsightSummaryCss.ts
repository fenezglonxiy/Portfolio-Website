import { css } from "@mui/material";

const getInsightSummaryCss = () => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default getInsightSummaryCss;
