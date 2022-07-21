import './Hoover.css';

import React from 'react';

import vacuum from '../../assets/vacuum.png';
import IHoover from '../../interfaces/IHoover';

const Hoover = (hoover: IHoover) => {
  const getRotation = (position: string): void => {
    switch (position) {
      case 'N':
        '0deg';
        break;
      case 'E':
        '90deg';
        break;
      case 'S':
        '180deg';
        break;
      case 'W':
        '270deg';
        break;
    }
  };
  return (
    <div
      className="hoover"
      style={{
        gridRow: hoover.locationX,
        gridColumn: hoover.locationY,
        transform: `rotate(${getRotation(hoover.direction)})`,
      }}>
      <img src={vacuum} alt="vacuum" height={100} width={100} />
    </div>
  );
};

export default Hoover;
