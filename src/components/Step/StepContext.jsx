import React, { createContext, useState } from 'react';

export const StepContext = createContext();

export function StepProvider({ children }) {
  const [cardInfo, setCardInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    ccv: ''
  });

  return (
    <StepContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </StepContext.Provider>
  );
}

export default StepContext;