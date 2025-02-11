import { css, Theme } from "@mui/material";

const getBusinessAttentionCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(8)};
  flex-basis: 65%;
`;

export default getBusinessAttentionCss;
