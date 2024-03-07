import { createContext, useState } from "react";
import { DataContextType, DataProviderProps } from "../types";

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [recordCount, setRecordCount] = useState(0);

  return (
    <DataContext.Provider value={{ recordCount, setRecordCount }}>
      {children}
    </DataContext.Provider>
  );
};
