"use client";
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [shouldShowLoader, setShouldShowLoader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        shouldShowLoader,
        setShouldShowLoader,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
