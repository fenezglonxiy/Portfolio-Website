import React, { SyntheticEvent } from "react";

import useId from "./useId";

type PopperStateHookParams = {
  popperId?: string;
};

type PopperState = {
  /**
   * Open the popper.
   */
  open: (eventOrAnchorEl: SyntheticEvent | Element) => void;

  /**
   * Close the popper.
   */
  close: () => void;

  /**
   * Open the popper if it is closed, or close the popper if it is opened.
   */
  toggle: (eventOrAnchorEl: SyntheticEvent | Element) => void;

  /**
   * Set whether the popper is opened. If `open` is truthy, an anchor element
   * or a event with `currentTarget` must be provided, otherwise an error with
   * the message `"Need an anchor element to position the popper"` will be
   * thrown.
   */
  setOpen: (open: boolean, eventOrAnchorEl?: SyntheticEvent | Element) => void;

  /**
   * Return `true` if the popper is opened, otherwise return `false`.
   */
  isOpen: boolean;

  /**
   * The current anchor element.
   */
  anchorEl: Element | null;

  /**
   * Set the anchor element (the `currentTarget` of the triggering mouse event
   * is used by default unless the `setAnchorEl` has been called).
   */
  setAnchorEl: (el: Element) => void;

  /**
   * The id of the popper. It is a value returned by `useId` by default unless
   * a value has been passed to `usePopperState`.
   */
  popperId: string;
};

type PopperTriggerControlProps = {
  /**
   * The `aria-controls` ARIA attribute.
   */
  "aria-controls": string;

  /**
   * The `aria-describedby` ARIA attribute.
   */
  "aria-describedby": string;

  /**
   * Callback fired when the trigger is clicked.
   *
   * The `event.currentTarget` is used as the current anchor element of the
   * popper.
   */
  onClick: (event: React.MouseEvent<Element>) => void;
};

export const bindTrigger = (
  popperState: PopperState
): PopperTriggerControlProps => {
  const { popperId, toggle } = popperState;

  return {
    "aria-controls": popperId,
    "aria-describedby": popperId,
    onClick: toggle,
  };
};

type PopperControlProps = {
  /**
   * The id of the popper.
   */
  id: string;

  /**
   * Control whether the popper is opened.
   */
  open: boolean;

  /**
   * The current anchor element.
   */
  anchorEl: Element | null;
};

export const bindPopper = (popperState: PopperState): PopperControlProps => {
  const { isOpen, anchorEl, popperId } = popperState;

  return {
    id: popperId,
    open: isOpen,
    anchorEl,
  };
};

const usePopperState = (params?: PopperStateHookParams): PopperState => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const isOpen = Boolean(anchorEl);
  const popperId = params?.popperId ?? useId();

  const openPopper = (eventOrAnchorEl: SyntheticEvent | Element) => {
    const newAnchorEl =
      eventOrAnchorEl instanceof Element
        ? eventOrAnchorEl
        : eventOrAnchorEl.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  const closePopper = () => {
    setAnchorEl(null);
  };

  const togglePopper = (eventOrAnchorEl: SyntheticEvent | Element) => {
    if (!isOpen) {
      openPopper(eventOrAnchorEl);
    } else {
      closePopper();
    }
  };

  const setOpenPopper = (
    open: boolean,
    eventOrAnchorEl?: SyntheticEvent | Element
  ) => {
    if (open) {
      if (!eventOrAnchorEl) {
        throw new Error("Need an anchor element to position the popper");
      }

      openPopper(eventOrAnchorEl);
    } else {
      closePopper();
    }
  };

  return {
    open: openPopper,
    close: closePopper,
    toggle: togglePopper,
    setOpen: setOpenPopper,
    isOpen,
    popperId,
    anchorEl,
    setAnchorEl,
  };
};

export default usePopperState;
