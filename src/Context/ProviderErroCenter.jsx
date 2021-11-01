import React from 'react';
import ErrorCenterContext from "./ErroCenterContext";

function ProviderErroCenter({ children }) {
 
  const contextValue = {
  
  };

  return (
    <ErrorCenterContext.Provider value={contextValue}>
      {children}
    </ErrorCenterContext.Provider>
  );
}

export default ProviderErroCenter;