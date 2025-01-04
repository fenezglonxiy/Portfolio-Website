import React from "react";

type CardContextValue = {
  /**
   * Control whether the border-radius of the card media and the card content
   * should be inverted.
   */
  inverted: boolean;
};

const CardContext = React.createContext<CardContextValue>(
  {} as CardContextValue
);

export const useCardContext = (): CardContextValue => {
  const contextValue = React.useContext(CardContext);

  if (!contextValue) {
    throw new Error("useCardContext should be used within <Card>");
  }

  return contextValue;
};

export default CardContext;
