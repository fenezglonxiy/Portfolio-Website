import { css, Theme } from "@mui/material";
import { TimelineDotProps } from "./TimelineDot";

const getTimelineDotSizeCss = (theme: Theme, size: TimelineDotProps["size"]) =>
  css`
    padding: ${size === "md" ? theme.spacing(3.25) : theme.spacing(1)};
  `;

const getTimelineDotColorCss = (
  theme: Theme,
  color: TimelineDotProps["color"]
) => {
  const codeByColor: Record<NonNullable<TimelineDotProps["color"]>, string> = {
    white: theme.palette.common.white,
    "philippine-silver": theme.palette.neutral[500],
  };

  return css`
    background-color: ${codeByColor[
      color as NonNullable<TimelineDotProps["color"]>
    ]};
  `;
};

const getTimelineDotCss = (theme: Theme, props: TimelineDotProps) => css`
  width: max-content;
  display: flex;
  align-self: baseline;
  margin: ${theme.spacing(2.875)} 0;
  border: 2px solid transparent;
  border-radius: ${theme.shape[
    props.shape as NonNullable<TimelineDotProps["shape"]>
  ]};
  ${getTimelineDotSizeCss(theme, props.size)};
  ${getTimelineDotColorCss(theme, props.color)};
`;

export default getTimelineDotCss;
