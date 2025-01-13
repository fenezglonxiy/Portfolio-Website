import { css, Theme } from "@mui/material";
import { InsightCardChipBoxProps } from "./InsightCardChipBox";

const getInsightCardChipBoxCss = (
  theme: Theme,
  variant: InsightCardChipBoxProps["variant"]
) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};

  ${variant === "main" &&
  css`
    margin-left: auto;
  `}
`;

export default getInsightCardChipBoxCss;
