import React, { createContext, useState } from 'react';

type PlaygroundContent = {
  rowsNumber: number;
  setRowsNumber: React.Dispatch<React.SetStateAction<number>>;
  columnsNumber: number;
  setColumnsNumber: React.Dispatch<React.SetStateAction<number>>;
};

type CurrentPlaygroundProps = { children: React.ReactNode };

const CurrentPlaygroundContext = createContext<PlaygroundContent>({
  rowsNumber: 0,
  setRowsNumber: () => {},
  columnsNumber: 0,
  setColumnsNumber: () => {},
});

export const CurrentPlaygroundContextProvider = ({
  children,
}: CurrentPlaygroundProps) => {
  const [rowsNumber, setRowsNumber] = useState<number>(0);
  const [columnsNumber, setColumnsNumber] = useState<number>(0);

  return (
    <CurrentPlaygroundContext.Provider
      value={{
        rowsNumber,
        setRowsNumber,
        columnsNumber,
        setColumnsNumber,
      }}>
      {children}
    </CurrentPlaygroundContext.Provider>
  );
};

export default CurrentPlaygroundContext;
