import { TooltipProps } from "@/_components/tooltip";
import React from "react";

type TooltipStateHookParams = {
  title: TooltipProps["title"];
  trigger: TooltipProps["trigger"];
  placement?: TooltipProps["placement"];
};

type TooltipState = {
  /**
   * Control whether the tooltip is opened.
   */
  isOpen?: boolean;

  /**
   * The title of the tooltip.
   */
  title: TooltipProps["title"];

  /**
   * The placement of the tooltip.
   */
  placement?: TooltipProps["placement"];

  /**
   * Control the type of event that triggers the tooltip to show passed to the
   * `useTooltipState`.
   */
  trigger: TooltipProps["trigger"];

  /**
   * Open the tooltip.
   */
  open?: () => void;

  /**
   * Close the tooltip.
   */
  close?: () => void;
};

type TooltipTriggerControlProps = {
  /**
   * Callback fired when the trigger is clicked.
   */
  onClick?: () => void;
};

export const bindTrigger = (
  tooltipState: TooltipState
): TooltipTriggerControlProps => {
  const { open } = tooltipState;

  return {
    onClick: open,
  };
};

type TooltipControlProps = {
  /**
   * Control whether the tooltip is opened.
   */
  open?: boolean;

  /**
   * The title of the tooltip.
   */
  title: TooltipProps["title"];

  /**
   * The placement of the tooltip.
   */
  placement?: TooltipProps["placement"];

  /**
   * Control the type of event that triggers the tooltip to show passed to the
   * `useTooltipState`.
   */
  trigger: TooltipProps["trigger"];

  /**
   * Callback fired when the tooltip requests to close.
   */
  onClose?: () => void;
};

export const bindTooltip = (
  tooltipState: TooltipState
): TooltipControlProps => {
  const { isOpen, title, placement, trigger, close } = tooltipState;

  return {
    open: isOpen,
    title,
    placement,
    trigger,
    onClose: close,
  };
};

const useTooltipState = (params: TooltipStateHookParams): TooltipState => {
  const { trigger, title, placement } = params;
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen: trigger === "onClick" ? isOpen : undefined,
    title,
    placement,
    trigger,
    open: trigger === "onClick" ? open : undefined,
    close: trigger === "onClick" ? close : undefined,
  };
};

export default useTooltipState;
