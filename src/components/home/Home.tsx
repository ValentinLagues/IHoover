import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CurrentPlaygroundContext from '../../contexts/CurrentPlayground';

const Home = () => {
  const { grid, setGrid, hoover, setHoover } = useContext(CurrentPlaygroundContext);
  console.log(grid);
  console.log(hoover);
  // Fonction qui permet de choisir le nombre de lignes du playground
  const handleChangeRowsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setGrid({ rows: Number(e.currentTarget.value), columns: grid.columns });
  };
  // Fonction qui permet de choisir le nombre de colonnes du playground
  const handleChangeColumnsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setGrid({ rows: grid.rows, columns: Number(e.currentTarget.value) });
  };
  // Fonction qui permet de choisir la position X de départ du hoover
  const handleChangeHooverLocationX = (e: React.FormEvent<HTMLInputElement>) => {
    setHoover({
      locationX: Number(e.currentTarget.value),
      locationY: hoover.locationY,
      direction: hoover.direction,
    });
  };
  // Fonction qui permet de choisir la position Y de départ du hoover
  const handleChangeHooverLocationY = (e: React.FormEvent<HTMLInputElement>) => {
    setHoover({
      locationX: hoover.locationX,
      locationY: Number(e.currentTarget.value),
      direction: hoover.direction,
    });
  };
  // Fonction qui permet de choisir l'orientation de départ du hoover
  const handleChangeHooverDirection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoover({
      locationX: hoover.locationX,
      locationY: hoover.locationY,
      direction: String(e.currentTarget.value),
    });
  };
  return (
    <div className="App">
      <h1>Welcome to IHoover playground</h1>
      <form>
        <div>
          <p>Please select the size of the room you want to clean</p>
          <label htmlFor="horizontal">Horizontal</label>
          <input
            type="number"
            value={grid.rows}
            onChange={handleChangeRowsNumber}></input>
          <label htmlFor="vertical">Vertical</label>
          <input
            type="number"
            value={grid.columns}
            onChange={handleChangeColumnsNumber}></input>
        </div>
        <div>
          <p>Please select the initial position of your wonderful hoover</p>
          <label htmlFor="horizontal">Horizontal</label>
          <input
            type="number"
            value={hoover.locationX}
            onChange={handleChangeHooverLocationX}></input>
          <label htmlFor="vertical">Vertical</label>
          <input
            type="number"
            value={hoover.locationY}
            onChange={handleChangeHooverLocationY}></input>
          <label htmlFor="direction">Direction</label>
          <select
            name="directions"
            id="direction-select"
            onChange={handleChangeHooverDirection}>
            <option value="N">N</option>
            <option value="E">E</option>
            <option value="W">W</option>
            <option value="S">S</option>
          </select>
        </div>
        <NavLink to="/playground">
          <div>
            <input type="submit" value="Let's go !" />
          </div>
        </NavLink>
      </form>
    </div>
  );
};

export default Home;
