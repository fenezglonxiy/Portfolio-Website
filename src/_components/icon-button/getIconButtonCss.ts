import { css, Theme } from "@mui/material";
import { SerializedStyles } from "@mui/styled-engine";

import { IconButtonProps } from "./IconButton";

const getIconButtonColorCss = (
  theme: Theme,
  color: IconButtonProps["color"]
) => {
  const cssByColor: Record<
    NonNullable<IconButtonProps["color"]>,
    SerializedStyles
  > = {
    inherit: css`
      --icon-button-color: inherit;
    `,

    default: css`
      --icon-button-color: ${theme.palette.slate[400]};

      &:hover,
      &:focus {
        --icon-button-color: ${theme.palette.slate[600]};
      }
    `,
  };

  return cssByColor[color as NonNullable<IconButtonProps["color"]>];
};

const getIconButtonCss = (theme: Theme, props: IconButtonProps) => css`
  color: var(--icon-button-color);
  ${getIconButtonColorCss(theme, props.color)};
`;

export default getIconButtonCss;
