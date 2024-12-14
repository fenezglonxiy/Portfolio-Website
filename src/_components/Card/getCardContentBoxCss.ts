import { css, Theme } from "@mui/material";
import { CardContentBoxProps } from "./CardContentBox";

const getCardContentBoxCss = (theme: Theme, props: CardContentBoxProps) =>
  css`
    ${props.flex === undefined &&
    css`
      ${props.verticalSpacing
        ? css`
            --flow-spacing-y: ${theme.spacing(props.verticalSpacing)};
          `
        : undefined};

      ${props.horizontalSpacing
        ? css`
            --flow-spacing-x: ${theme.spacing(props.horizontalSpacing)};
          `
        : undefined}
    `};

    ${props.flex !== undefined &&
    css`
      display: flex;
      flex-direction: ${props.flex === "vertical" ? "column" : "row"};
      flex-wrap: ${props.flexWrap};
      gap: ${theme.spacing(props.flexGap ?? 0)};
    `}
  `;

export default getCardContentBoxCss;
