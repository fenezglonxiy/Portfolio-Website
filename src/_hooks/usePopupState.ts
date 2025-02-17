import React, { SyntheticEvent } from "react";

import useId from "./useId";

type PopupStateHookParams = {
  /**
   * The variant of the popup.
   */
  variant: "popper" | "menu";

  /**
   * The id of the popup component.
   */
  id?: string;

  /**
   * The id of the trigger component.
   */
  triggerId?: string;
};

type PopupState = {
  /**
   * Open the popup.
   */
  open: (eventOrAnchorEl: SyntheticEvent | Element) => void;

  /**
   * Close the popup.
   */
  close: () => void;

  /**
   * Open the popup if it is closed, or close the popup if it is opened.
   */
  toggle: (eventOrAnchorEl: SyntheticEvent | Element) => void;

  /**
   * Set whether the popup is opened. If `open` is truthy, an anchor element or
   * an event with `currentTarget` must be provided, otherwise an error with
   * the message `"Need an anchor element to position the popup"` will be
   * thrown.
   */
  setOpen: (open: boolean, eventOrAnchorEl?: SyntheticEvent | Element) => void;

  /**
   * Return `true` if the popup is opened, otherwise return `false`.
   */
  isOpen: boolean;

  /**
   * The current anchor element.
   */
  anchorEl: Element | null;

  /**
   * Set the current anchor element (the `currentTarget` of the triggering
   * mouse event is used by default unless the `setAnchorEl` has been called).
   */
  setAnchorEl: (el: Element) => void;

  /**
   * The value of `variant` param has been passed to `usePopupState`.
   */
  variant: PopupStateHookParams["variant"];

  /**
   * The id of the popup. It is a value returned by `useId` by default unless
   * a value has been passed to `usePopupState`.
   */
  popupId: string;

  /**
   * The id of the trigger. It is a value returned by `useId` by default unless
   * a value has been passed to `usePopupState`
   */
  triggerId: string;
};

type PopupTriggerControlProps = {
  /**
   * The `aria-controls` ARIA attribute.
   */
  "aria-controls"?: string;

  /**
   * The `aria-describedby` ARIA attribute.
   */
  "aria-describedby"?: string;

  /**
   * The `aria-expanded` ARIA attribute.
   */
  "aria-expanded"?: boolean;

  /**
   * The `aria-haspopup` ARIA attribute.
   */
  "aria-haspopup"?: "true" | undefined;

  /**
   * Callback fired when the trigger is clicked.
   *
   * The current anchor element can be accessed via `event.currentTarget`.
   */
  onClick: (event: React.MouseEvent<Element>) => void;
};

export const bindTrigger = (
  popupState: PopupState
): PopupTriggerControlProps => {
  const { variant, popupId, isOpen, toggle } = popupState;
  const ariaControls = isOpen ? popupId : undefined;
  const ariaDescribedby = isOpen ? popupId : undefined;
  const ariaExpanded = isOpen ? true : undefined;

  switch (variant) {
    case "popper":
      return {
        "aria-describedby": ariaDescribedby,
        onClick: toggle,
      };
    case "menu":
      return {
        "aria-controls": ariaControls,
        "aria-haspopup": "true",
        "aria-expanded": ariaExpanded,
        onClick: toggle,
      };
  }
};

type PopperControlProps = {
  /**
   * The `id` of the popper.
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

export const bindPopper = (popupState: PopupState): PopperControlProps => {
  const { popupId, isOpen, anchorEl } = popupState;

  return {
    id: popupId,
    open: isOpen,
    anchorEl,
  };
};

type MenuControlProps = {
  /**
   * The `id` of the menu.
   */
  id: string;

  /**
   * Control whether the menu is opened.
   */
  open: boolean;

  /**
   * The current anchor element.
   */
  anchorEl: Element | null;

  /**
   * Callback fired when the menu requests to be closed.
   */
  onClose: () => void;

  /**
   * The `aria-labelledby` ARIA attribute.
   */
  MenuListProps: {
    "aria-labelledby": string;
  };
};

export const bindMenu = (popupState: PopupState): MenuControlProps => {
  const { popupId, triggerId, isOpen, anchorEl, close } = popupState;

  return {
    id: popupId,
    open: isOpen,
    anchorEl,
    onClose: close,
    MenuListProps: {
      "aria-labelledby": triggerId,
    },
  };
};

const usePopupState = (params: PopupStateHookParams): PopupState => {
  const { variant, id: idFromParams, triggerId: triggerIdFromParams } = params;
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const isOpen = Boolean(anchorEl);
  const popupId = useId();
  const triggerId = useId();

  const open = (eventOrAnchorEl: SyntheticEvent | Element) => {
    const newAnchorEl =
      eventOrAnchorEl instanceof Element
        ? eventOrAnchorEl
        : eventOrAnchorEl.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  const close = () => {
    setAnchorEl(null);
  };

  const toggle = (eventOrAnchorEl: SyntheticEvent | Element) => {
    if (isOpen) {
      close();
    } else {
      open(eventOrAnchorEl);
    }
  };

  const setOpen = (
    isOpen: boolean,
    eventOrAnchorEl?: SyntheticEvent | Element
  ) => {
    if (isOpen) {
      if (!eventOrAnchorEl) {
        throw new Error("Need an anchor element to position the popup");
      }

      open(eventOrAnchorEl);
    } else {
      close();
    }
  };

  return {
    open,
    close,
    toggle,
    setOpen,
    anchorEl,
    setAnchorEl,
    isOpen,
    variant,
    popupId: idFromParams ? idFromParams : popupId,
    triggerId: triggerIdFromParams ? triggerIdFromParams : triggerId,
  };
};

export default usePopupState;
