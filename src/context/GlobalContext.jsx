/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const handleSetToken = (userToken) => {
    setToken(userToken);
  };

  return (
    <GlobalContext.Provider value={{ token, handleSetToken, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
