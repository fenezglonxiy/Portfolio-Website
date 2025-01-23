import {
  ClickAwayListener,
  Tooltip as MUITooltip,
  TooltipProps as MUITooltipProps,
} from "@mui/material";
import React from "react";

export type TooltipProps = Omit<
  MUITooltipProps,
  "disableHoverListener" | "disableFocusListener" | "disableTouchListener"
> & {
  /**
   * Control the type of event that triggers a tooltip to show.
   *
   * @default "onHover"
   */
  trigger?: "onHover" | "onFocus" | "onClick";
};

const Tooltip = React.forwardRef(function Tooltip(
  props: TooltipProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { open = false, trigger = "onHover", onClose, ...rest } = props;
  const tooltipProps = {
    ref: ref,
    ...rest,
  };

  if (trigger === "onClick") {
    return (
      <ClickAwayListener
        onClickAway={
          onClose as NonNullable<(event: MouseEvent | TouchEvent) => void>
        }
      >
        <div>
          <MUITooltip
            open={open}
            slotProps={{
              popper: {
                disablePortal: trigger === "onClick",
              },
            }}
            disableHoverListener
            disableFocusListener
            disableTouchListener
            {...tooltipProps}
          />
        </div>
      </ClickAwayListener>
    );
  }

  const disableHoverListener = trigger === "onFocus";
  const disableFocusListener = trigger === "onHover";

  return (
    <MUITooltip
      disableHoverListener={disableHoverListener}
      disableFocusListener={disableFocusListener}
      {...tooltipProps}
    />
  );
});

export default Tooltip;
