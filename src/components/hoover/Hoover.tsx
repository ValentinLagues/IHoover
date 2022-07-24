import './Hoover.css';

import React from 'react';

import vacuum from '../../assets/images/vacuum.png';
import IGrid from '../../interfaces/IGrid';
import IHoover from '../../interfaces/IHoover';

interface HooverProps {
  hoover: IHoover;
  grid: IGrid;
}
const Hoover = ({ hoover, grid }: HooverProps) => {
  // fonction pour faire tourner l'image de 90° selon la direction pour rendre l'experience plus visuelle
  const getRotation = (position: string): number => {
    switch (position) {
      case 'N':
        return 0;
      case 'E':
        return 90;
      case 'S':
        return 180;
      case 'W':
        return 270;
    }
    return 0;
  };

  return (
    <div
      className="hoover"
      style={{
        gridRow: `${grid.rows - hoover.locationY} / span 1`,
        gridColumn: `${hoover.locationX + 1} / span 1`,
        transform: `rotate(${getRotation(hoover.direction)}deg)`,
      }}>
      <img
        src={vacuum}
        alt="vacuum"
        height={
          grid.columns > 15 && grid.rows > 15
            ? '30px'
            : grid.columns > 10 && grid.rows > 10
            ? '50px'
            : '60px'
        }
        width={
          grid.columns > 15 && grid.rows > 15
            ? '30px'
            : grid.columns > 10 && grid.rows > 10
            ? '50px'
            : '60px'
        }
      />
    </div>
  );
};

export default Hoover;
