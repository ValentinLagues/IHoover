import React, { createContext, useState } from 'react';

type PlaygroundContent = {
  rowsNumber: number;
  setRowsNumber: React.Dispatch<React.SetStateAction<number>>;
  columnsNumber: number;
  setColumnsNumber: React.Dispatch<React.SetStateAction<number>>;
  hooverLocationX: number;
  setHooverLocationX: React.Dispatch<React.SetStateAction<number>>;
  hooverLocationY: number;
  setHooverLocationY: React.Dispatch<React.SetStateAction<number>>;
  hooverDirection: string;
  setHooverDirection: React.Dispatch<React.SetStateAction<string>>;
};

type CurrentPlaygroundProps = { children: React.ReactNode };

const CurrentPlaygroundContext = createContext<PlaygroundContent>({
  rowsNumber: 1,
  setRowsNumber: () => {},
  columnsNumber: 1,
  setColumnsNumber: () => {},
  hooverLocationX: 0,
  setHooverLocationX: () => {},
  hooverLocationY: 0,
  setHooverLocationY: () => {},
  hooverDirection: 'N',
  setHooverDirection: () => {},
});

export const CurrentPlaygroundContextProvider = ({
  children,
}: CurrentPlaygroundProps) => {
  const [rowsNumber, setRowsNumber] = useState<number>(1);
  const [columnsNumber, setColumnsNumber] = useState<number>(1);
  const [hooverLocationX, setHooverLocationX] = useState<number>(0);
  const [hooverLocationY, setHooverLocationY] = useState<number>(0);
  const [hooverDirection, setHooverDirection] = useState<string>('N');

  return (
    <CurrentPlaygroundContext.Provider
      value={{
        rowsNumber,
        setRowsNumber,
        columnsNumber,
        setColumnsNumber,
        hooverLocationX,
        setHooverLocationX,
        hooverLocationY,
        setHooverLocationY,
        hooverDirection,
        setHooverDirection,
      }}>
      {children}
    </CurrentPlaygroundContext.Provider>
  );
};

export default CurrentPlaygroundContext;
