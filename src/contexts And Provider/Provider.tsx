import React, { useContext } from "react";
import { appContext } from "./Context";

type ContextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const context = useContext(appContext);

  return <appContext.Provider value={context}>{children}</appContext.Provider>;
};

export default ContextProvider;
