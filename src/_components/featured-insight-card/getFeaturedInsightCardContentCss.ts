import { alpha, css, Theme } from "@mui/material";

const getFeaturedInsightCardContentCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;

  && {
    padding: ${theme.spacing(8)};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${alpha(theme.palette.neutral[900], 0.6)};
    backdrop-filter: blur(2px);
    z-index: -1;
  }
`;

export default getFeaturedInsightCardContentCss;
