import React, { useEffect, useState } from 'react';
import ErrorCenterContext from "./ErroCenterContext";
import dados from "../mockrequest/events.json"

function ProviderErroCenter({ children }) {
  const [conected, setConected] = useState(false)
  const [renderDash, setRenderDash] = useState("error-list")
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(dados)
  }, [])

  const filterKeys = {
    "ID": "id",
    "Level":"level",
    "Descrição": "description",
    "Origem": "origem",
    "Data": "createdAt",
    "Quantidade": "quantity"
  }

  const filterEvents = (filter, param) => {
    const filterSelector = filterKeys[filter];
    const newData = dados.filter((elem) => param == elem[`${filterSelector}`]);
    setEvents(newData);
  }
 
  const contextValue = {
    conected,
    setConected,
    renderDash,
    setRenderDash,
    events,
    setEvents,
    filterEvents,
  };

  return (
    <ErrorCenterContext.Provider value={contextValue}>
      {children}
    </ErrorCenterContext.Provider>
  );
}

export default ProviderErroCenter;