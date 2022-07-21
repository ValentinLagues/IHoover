import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CurrentPlaygroundContext from '../../contexts/CurrentPlayground';

const Home = () => {
  const {
    setRowsNumber,
    rowsNumber,
    setColumnsNumber,
    columnsNumber,
    setHooverLocationX,
    hooverLocationX,
    setHooverLocationY,
    hooverLocationY,
    setHooverDirection,
    hooverDirection,
  } = useContext(CurrentPlaygroundContext);
  // Fonction qui permet de choisir le nombre de lignes du playground
  const handleChangeRowsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setRowsNumber(Number(e.currentTarget.value));
    console.log(rowsNumber);
  };
  // Fonction qui permet de choisir le nombre de colonnes du playground
  const handleChangeColumnsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setColumnsNumber(Number(e.currentTarget.value));
    console.log(columnsNumber);
  };
  // Fonction qui permet de choisir la position X de départ du hoover
  const handleChangeHooverLocationX = (e: React.FormEvent<HTMLInputElement>) => {
    setHooverLocationX(Number(e.currentTarget.value));
    console.log(hooverLocationX);
  };
  // Fonction qui permet de choisir la position Y de départ du hoover
  const handleChangeHooverLocationY = (e: React.FormEvent<HTMLInputElement>) => {
    setHooverLocationY(Number(e.currentTarget.value));
    console.log(hooverLocationY);
  };
  // Fonction qui permet de choisir l'orientation de départ du hoover
  const handleChangeHooverDirection = (e: React.FormEvent<HTMLInputElement>) => {
    setHooverDirection(e.currentTarget.value);
    console.log(hooverDirection);
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
            value={rowsNumber}
            onChange={handleChangeRowsNumber}></input>
          <label htmlFor="vertical">Vertical</label>
          <input
            type="number"
            value={columnsNumber}
            onChange={handleChangeColumnsNumber}></input>
        </div>
        <div>
          <p>Please select the initial position of your wonderful hoover</p>
          <label htmlFor="horizontal">Horizontal</label>
          <input
            type="number"
            value={hooverLocationX}
            onChange={handleChangeHooverLocationX}></input>
          <label htmlFor="vertical">Vertical</label>
          <input
            type="number"
            value={hooverLocationY}
            onChange={handleChangeHooverLocationY}></input>
          <label htmlFor="direction">Direction</label>
          <select name="directions" id="direction-select">
            <option value="">--Please choose a direction--</option>
            <option value="N">N</option>
            <option value="E">E</option>
            <option value="W">W</option>
            <option value="S">S</option>
          </select>
        </div>
        <NavLink to="/playground">
          <div>
            <input
              type="submit"
              value="Let's go !"
              onChange={handleChangeHooverDirection}
            />
          </div>
        </NavLink>
      </form>
    </div>
  );
};

export default Home;
