import React, { createContext, useState } from 'react';

import IGrid from '../interfaces/IGrid';
import IHoover from '../interfaces/IHoover';

type PlaygroundContent = {
  grid: IGrid;
  setGrid: React.Dispatch<React.SetStateAction<IGrid>>;
  hoover: IHoover;
  setHoover: React.Dispatch<React.SetStateAction<IHoover>>;
  // eslint-disable-next-line no-unused-vars
  moveHoover: (_c: string, h: IHoover) => IHoover;
  // eslint-disable-next-line no-unused-vars
  moveHooverViaInstructions: (_c: string, h: IHoover) => IHoover;
};

const HOOVER_DEFAULT: IHoover = {
  locationX: 0,
  locationY: 0,
  direction: 'N',
};

type CurrentPlaygroundProps = { children: React.ReactNode };

const CurrentPlaygroundContext = createContext<PlaygroundContent>({
  grid: { rows: 10, columns: 10 },
  setGrid: () => {},
  hoover: HOOVER_DEFAULT,
  setHoover: () => {},
  // eslint-disable-next-line no-unused-vars
  moveHoover: (c: string, h: IHoover) => HOOVER_DEFAULT,
  // eslint-disable-next-line no-unused-vars
  moveHooverViaInstructions: (c: string, h: IHoover) => HOOVER_DEFAULT,
});

export const CurrentPlaygroundContextProvider = ({
  children,
}: CurrentPlaygroundProps) => {
  const [grid, setGrid] = useState<IGrid>({ rows: 10, columns: 10 });
  const [hoover, setHoover] = useState<IHoover>({
    locationX: 0,
    locationY: 0,
    direction: 'N',
  });

  // takes an instructions strings and move the hoover to the final position
  const moveHooverViaInstructions = (instructions: string, hoover: IHoover): IHoover => {
    // creates a temporary hoover to calculate final destination
    let tempoHoover = hoover;
    for (let i = 0; i < instructions.length; i++) {
      tempoHoover = moveHoover(instructions[i], tempoHoover);
    }
    return {
      locationX: tempoHoover.locationX,
      locationY: tempoHoover.locationY,
      direction: tempoHoover.direction,
    };
  };

  const moveHoover = (command: string, hooverToMove: IHoover): IHoover => {
    switch (command) {
      case 'd' || 'D':
        if (hooverToMove.direction === 'N') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'E',
          };
        } else if (hooverToMove.direction === 'E') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'S',
          };
        } else if (hooverToMove.direction === 'S') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'W',
          };
        } else if (hooverToMove.direction === 'W') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'N',
          };
        }
        break;
      case 'g' || 'G':
        if (hooverToMove.direction === 'N') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'W',
          };
        } else if (hooverToMove.direction === 'W') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'S',
          };
        } else if (hooverToMove.direction === 'S') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'E',
          };
        } else if (hooverToMove.direction === 'E') {
          return {
            locationX: hooverToMove.locationX,
            locationY: hooverToMove.locationY,
            direction: 'N',
          };
        }
        break;
      case 'a' || 'A':
        if (hooverToMove.direction === 'N') {
          if (hooverToMove.locationY + 1 <= grid.rows - 1) {
            return {
              locationX: hooverToMove.locationX,
              locationY: hooverToMove.locationY + 1,
              direction: 'N',
            };
          } else {
            return {
              locationX: hooverToMove.locationX,
              locationY: hooverToMove.locationY,
              direction: 'N',
            };
          }
        } else if (hooverToMove.direction === 'E') {
          if (hoover.locationX + 1 <= grid.columns - 1) {
            return {
              locationX: hooverToMove.locationX + 1,
              locationY: hooverToMove.locationY,
              direction: 'E',
            };
          } else {
            return {
              locationX: hooverToMove.locationX,
              locationY: hooverToMove.locationY,
              direction: 'E',
            };
          }
        } else if (hooverToMove.direction === 'S') {
          if (hoover.locationY - 1 >= 0 && hoover.locationY > -grid.rows) {
            return {
              locationX: hooverToMove.locationX,
              locationY: hooverToMove.locationY - 1,
              direction: 'S',
            };
          } else {
            return {
              locationX: hooverToMove.locationX,
              locationY: hooverToMove.locationY,
              direction: 'S',
            };
          }
        } else if (hooverToMove.direction === 'W') {
          if (hoover.locationX - 1 >= 0 && hoover.locationX > -grid.columns) {
            return {
              locationX: hooverToMove.locationX - 1,
              locationY: hooverToMove.locationY,
              direction: 'W',
            };
          } else {
            return {
              locationX: hooverToMove.locationX,
              locationY: hooverToMove.locationY,
              direction: 'W',
            };
          }
        }
        break;
    }
    return HOOVER_DEFAULT;
  };

  return (
    <CurrentPlaygroundContext.Provider
      value={{
        grid,
        setGrid,
        hoover,
        setHoover,
        moveHoover,
        moveHooverViaInstructions,
      }}>
      {children}
    </CurrentPlaygroundContext.Provider>
  );
};

export default CurrentPlaygroundContext;
