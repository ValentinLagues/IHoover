import './Hoover.css';

import React from 'react';

import vacuum from '../../assets/vacuum.png';
import IHoover from '../../interfaces/IHoover';

const Hoover = (hoover: IHoover) => {
  const getRotation = (position: string): void => {
    switch (position) {
      case 'N':
        0;
        break;
      case 'E':
        90;
        break;
      case 'S':
        180;
        break;
      case 'W':
        270;
        break;
    }
  };
  console.log(getRotation);
  console.log(hoover.direction);
  return (
    <div
      className="hoover"
      style={{
        gridRow: `${hoover.locationX} / span 1`,
        gridColumn: `${hoover.locationY} / span 1`,
        transform: `rotate(${getRotation(hoover.direction)}deg)`,
      }}>
      <img src={vacuum} alt="vacuum" height={100} width={100} style={{}} />
    </div>
  );
};

export default Hoover;
