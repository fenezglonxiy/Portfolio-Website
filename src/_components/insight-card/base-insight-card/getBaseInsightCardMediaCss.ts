import { css } from "@mui/material";

const getBaseInsightCardMediaCss = () => css`
  padding-bottom: 110%;
  position: relative;

  & > * {
    position: absolute;
    height: 100%;
  }
`;

export default getBaseInsightCardMediaCss;
