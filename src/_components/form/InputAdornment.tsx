import React from "react";
import { ValidationStatus } from "./types";
import { InputAdornment as MUIInputAdornment } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";

type InputAdornmentBaseProps = {
  /**
   * Control the position of the component that is relative to the input.
   * Either before the input or after the input.
   * @default "start"
   */
  position?: "start" | "end";

  /**
   * Control the variant of the component.
   * @default "standard"
   */
  variant?: "standard" | "filled";

  /**
   * The validation status of the input.
   */
  validationStatus?: ValidationStatus;

  /**
   * Control the vertical alignment of the content inside.
   */
  verticalAligned?: "top" | "center";
};

export interface InputAdornmentTypeMap<D extends React.ElementType = "div"> {
  props: InputAdornmentBaseProps;
  defaultComponent: D;
}

export type InputAdornmentProps<
  D extends React.ElementType = InputAdornmentTypeMap["defaultComponent"]
> = OverrideProps<InputAdornmentTypeMap<D>, D>;

const InputAdornment = React.forwardRef(function InputAdornment(
  props: InputAdornmentProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    position = "start",
    variant = "standard",
    verticalAligned,
    ...rest
  } = props;

  return (
    <MUIInputAdornment
      ref={ref}
      position={position}
      aria-hidden
      disableTypography
      {...rest}
    />
  );
});

InputAdornment.displayName = "InputAdornment";

export default InputAdornment;
