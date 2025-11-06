import React, { createContext, useContext } from 'react';

const TabStateContext = createContext();

export function TabStateProvider({ children, value }) {
  return (
    <TabStateContext.Provider value={value}>
      {children}
    </TabStateContext.Provider>
  );
}

export function useTabState() {
  return useContext(TabStateContext);
}
