import { css, Theme } from "@mui/material";

const getFooterLocalTimeCss = (theme: Theme) => css`
  --flow-spacing-x: ${theme.spacing(2)};

  & > span {
    vertical-align: middle;
  }
`;

export default getFooterLocalTimeCss;
