import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "./reduer";

export const Context = createContext();

function ContextProvider({ children }) {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
