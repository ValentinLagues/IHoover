import React, { useContext, useState } from 'react';

import CurrentPlaygroundContext from '../../contexts/CurrentPlayground';
import Hoover from '../hoover/Hoover';

const Playground = () => {
  const [commandsList, setCommandsList] = useState('');

  const {
    setHooverLocationX,
    hooverLocationX,
    setHooverLocationY,
    hooverLocationY,
    setHooverDirection,
    hooverDirection,
  } = useContext(CurrentPlaygroundContext);

  // Only authorizing dga characters
  const checkDGA = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.key !== 'd' &&
      e.key !== 'g' &&
      e.key !== 'a' &&
      e.key !== 'Enter' &&
      e.key !== 'Backspace'
    ) {
      e.preventDefault();
    }
  };

  // Button to rotate 90° on the right
  const rotateRight = () => {
    if (hooverDirection === 'N') {
      setHooverDirection('E');
    } else if (hooverDirection === 'E') {
      setHooverDirection('S');
    } else if (hooverDirection === 'S') {
      setHooverDirection('W');
    } else if (hooverDirection === 'W') {
      setHooverDirection('N');
    }
    console.log(hooverDirection);
  };
  // Button to rotate 90° on the left
  const rotateLeft = () => {
    if (hooverDirection === 'N') {
      setHooverDirection('W');
    } else if (hooverDirection === 'W') {
      setHooverDirection('S');
    } else if (hooverDirection === 'S') {
      setHooverDirection('E');
    } else if (hooverDirection === 'E') {
      setHooverDirection('N');
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCommandsList(e.currentTarget.value);
    console.log(commandsList);
  };

  return (
    <div>
      <div className="instructions">
        <h2>Controls</h2>
        <p>
          Use the arrow buttons to change the direction of the hoover (1 click = 90°
          rotation)
        </p>
        <p>Use the MOVE button to move the hoover</p>
        <p>
          If you want to change the playground configuration, use the RESET PLAYGROUND
          button
        </p>
      </div>
      <div className="grid">
        GRID
        <Hoover />
      </div>
      <div>
        <input
          type="text"
          onKeyDown={checkDGA}
          placeholder="Entrez vos commandes"
          value={commandsList}
          onChange={handleChange}
        />
        <input type="submit"></input>
      </div>
      <div className="commands">
        <button onClick={() => rotateLeft}>- 90°</button>
        <button onClick={() => rotateRight}>+ 90°</button>
      </div>
    </div>
  );
};

export default Playground;
