import { useId as useReactId } from "react";

const useId = (idFromProps?: string): string => {
  if (idFromProps) {
    return idFromProps;
  }

  const id = useReactId();
  return `pw-${id}`;
};

export default useId;
