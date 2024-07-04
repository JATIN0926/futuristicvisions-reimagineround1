"use client";
import { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [shouldShowLoader, setShouldShowLoader] = useState(true);

  return (
    <LoaderContext.Provider value={{ shouldShowLoader, setShouldShowLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
