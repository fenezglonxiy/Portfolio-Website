import { css, Theme } from "@mui/material";

import { CardContentBoxProps } from "./CardContentBox";

const getCardContentBoxCss = (theme: Theme, props: CardContentBoxProps) =>
  css`
    flex: ${props.flex};

    ${props.orientation === undefined &&
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

    ${props.orientation !== undefined &&
    css`
      display: flex;
      justify-content: ${props.justifyContent};
      align-items: ${props.alignItems};
      flex-direction: ${props.orientation === "horizontal" ? "row" : "column"};
      flex-wrap: ${props.flexWrap};
      gap: ${theme.spacing(props.flexGap ?? 0)};
    `}
  `;

export default getCardContentBoxCss;
