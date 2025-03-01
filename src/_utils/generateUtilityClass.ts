export const globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};

export type GlobalStateSlot = keyof typeof globalStateClasses;

export function isGlobalState(slot: string) {
  return globalStateClasses[slot as GlobalStateSlot] !== undefined;
}

export default function generateUtilityClass(
  componentName: string,
  slot: string,
  globalStatePrefix: string = "Pw"
) {
  if (isGlobalState(slot)) {
    return `${globalStatePrefix}-${
      globalStateClasses[slot as GlobalStateSlot]
    }`;
  }

  return `${componentName}-${slot}`;
}
