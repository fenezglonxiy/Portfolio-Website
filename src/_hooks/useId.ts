import { useId as useReactId } from "react";

const useId = (idFromProps?: string): string => {
  const id = useReactId();

  if (idFromProps) {
    return idFromProps;
  }

  return `pw-${id}`;
};

export default useId;
