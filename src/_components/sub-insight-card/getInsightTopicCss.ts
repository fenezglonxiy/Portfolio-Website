import { css, Theme } from "@mui/material";

const getInsightTopicCss = (theme: Theme) => css`
  position: absolute;
  top: ${theme.spacing(10)};
  left: 0;
  border-radius: ${theme.shape.xs};
  border-bottom-left-radius: ${theme.shape.none};

  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 24px;
    bottom: -24px;
    left: 0;
    border-top-left-radius: ${theme.shape.xs};
    box-shadow: 0 -12px var(--variant-filled-background-color);
  }
`;

export default getInsightTopicCss;
