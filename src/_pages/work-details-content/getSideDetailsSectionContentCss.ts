import { css, Theme } from "@mui/material";
import { SideDetailsSectionContentProps } from "./SideDetailsSectionContent";

const getSideDetailsSectionContentCss = (
  theme: Theme,
  props: SideDetailsSectionContentProps
) => css`
  display: flex;
  flex-direction: ${props.orientation === "horizontal" ? "row" : "column"};
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
`;

export default getSideDetailsSectionContentCss;
