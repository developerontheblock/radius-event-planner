import { ReactNode } from "react";

export type DataContextType = {
  recordCount: number;
  setRecordCount: (newValue: number | ((prevValue: number) => number)) => void;
};

export type DataProviderProps = {
  children: ReactNode;
};
