import { css } from "@mui/material";

const getInsightCardMediaCss = () => css`
  padding-bottom: 110%;
  position: relative;

  & > * {
    position: absolute;
  }
`;

export default getInsightCardMediaCss;
