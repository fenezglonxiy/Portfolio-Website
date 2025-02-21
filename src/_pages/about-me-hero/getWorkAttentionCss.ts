import { css, Theme } from "@mui/material";

const getWorkAttentionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
`;

export default getWorkAttentionCss;
