import { css, Theme } from "@mui/material";

const getInsightPublishInfo = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};
`;

export default getInsightPublishInfo;
