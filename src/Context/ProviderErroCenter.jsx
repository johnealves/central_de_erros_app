import React, { useState } from 'react';
import ErrorCenterContext from "./ErroCenterContext";

function ProviderErroCenter({ children }) {
  const [conected, setConected] = useState(false)
  const [renderDash, setRenderDash] = useState("error-list")
 
  const contextValue = {
    conected,
    setConected,
    renderDash,
    setRenderDash
  };

  return (
    <ErrorCenterContext.Provider value={contextValue}>
      {children}
    </ErrorCenterContext.Provider>
  );
}

export default ProviderErroCenter;