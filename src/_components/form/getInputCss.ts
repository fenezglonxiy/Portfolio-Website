import { css, inputBaseClasses, Theme } from "@mui/material";

import { TextFieldProps } from "./TextField";
import { FormControlBaseProps } from "./FormControl";

const getInputCss = (
  theme: Theme,
  variant: FormControlBaseProps["variant"],
  includesLegendWithLabel: TextFieldProps["includesLegendWithLabel"]
) => css`
  display: inline-flex;
  align-items: center;
  -webkit-box-align: center;
  ${theme.typography.body2Medium};

  & .${inputBaseClasses.input} {
    height: ${variant !== "standard" ? "24px" : "23px"};
  }

  ${!includesLegendWithLabel &&
  css`
    && {
      margin: 0;
    }
  `}
`;

export default getInputCss;
