import React, { createContext, useState } from 'react';

import IGrid from '../interfaces/IGrid';
import IHoover from '../interfaces/IHoover';

type PlaygroundContent = {
  grid: IGrid;
  setGrid: React.Dispatch<React.SetStateAction<IGrid>>;
  hoover: IHoover;
  setHoover: React.Dispatch<React.SetStateAction<IHoover>>;
  // eslint-disable-next-line no-unused-vars
  moveHoover: (_c: string) => void;
};

type CurrentPlaygroundProps = { children: React.ReactNode };

const CurrentPlaygroundContext = createContext<PlaygroundContent>({
  grid: { rows: 0, columns: 0 },
  setGrid: () => {},
  hoover: { locationX: 0, locationY: 0, direction: 'N' },
  setHoover: () => {},
  moveHoover: (c: string) => c,
});

export const CurrentPlaygroundContextProvider = ({
  children,
}: CurrentPlaygroundProps) => {
  const [grid, setGrid] = useState<IGrid>({ rows: 0, columns: 0 });
  const [hoover, setHoover] = useState<IHoover>({
    locationX: 0,
    locationY: 0,
    direction: 'N',
  });

  const moveHoover = (command: string): void => {
    switch (command) {
      case 'd' || 'D':
        if (hoover.direction === 'N') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'E',
          });
        } else if (hoover.direction === 'E') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'S',
          });
        } else if (hoover.direction === 'S') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'W',
          });
        } else if (hoover.direction === 'W') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'N',
          });
        }
        break;
      case 'g' || 'G':
        if (hoover.direction === 'N') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'W',
          });
        } else if (hoover.direction === 'W') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'S',
          });
        } else if (hoover.direction === 'S') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'E',
          });
        } else if (hoover.direction === 'E') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY,
            direction: 'N',
          });
        }
        break;
      case 'a' || 'A':
        if (hoover.direction === 'N') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY + 1,
            direction: 'N',
          });
        } else if (hoover.direction === 'E') {
          setHoover({
            locationX: hoover.locationX + 1,
            locationY: hoover.locationY,
            direction: 'E',
          });
        } else if (hoover.direction === 'S') {
          setHoover({
            locationX: hoover.locationX,
            locationY: hoover.locationY - 1,
            direction: 'S',
          });
        } else if (hoover.direction === 'W') {
          setHoover({
            locationX: hoover.locationX - 1,
            locationY: hoover.locationY,
            direction: 'E',
          });
        }
        break;
    }
  };

  return (
    <CurrentPlaygroundContext.Provider
      value={{
        grid,
        setGrid,
        hoover,
        setHoover,
        moveHoover,
      }}>
      {children}
    </CurrentPlaygroundContext.Provider>
  );
};

export default CurrentPlaygroundContext;
