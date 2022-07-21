import './Playground.css';

import React, { useContext } from 'react';

import CurrentPlaygroundContext from '../../contexts/CurrentPlayground';
import Hoover from '../hoover/Hoover';

const Playground = () => {
  const { grid, hoover, setHoover } = useContext(CurrentPlaygroundContext);

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

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   setCommandsList(e.currentTarget.value);
  //   console.log(commandsList);
  // };

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
      <div
        className="grid"
        style={{
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
        }}>
        {Array.from({ length: grid.rows }, (_v, k) => k).map(() =>
          Array.from({ length: grid.columns }, (_v, k) => k).map((_item, index) => (
            <div className="grid-item" key={index} />
          )),
        )}
        <Hoover {...hoover} />
      </div>
      <div>
        <input
          type="text"
          onKeyDown={checkDGA}
          placeholder="Entrez vos commandes"
          // value={commandsList}
          // onChange={handleChange}
        />
        <input type="submit"></input>
      </div>
      {/* <div className="commands">
        <button onClick={() => rotateLeft}>- 90°</button>
        <button onClick={() => rotateRight}>+ 90°</button>
      </div> */}
    </div>
  );
};

export default Playground;
