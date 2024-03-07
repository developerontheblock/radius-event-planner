import { useContext } from "react";
import { DataContext } from "../components/PartnersData/DataProvider"; // Adjust the import path as necessary

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
