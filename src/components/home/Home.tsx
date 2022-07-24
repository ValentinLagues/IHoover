import './Home.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import vacuumHome from '../../assets/images/vacuumHome.png';
import CurrentPlaygroundContext from '../../contexts/CurrentPlayground';

const Home = () => {
  const { grid, setGrid, hoover, setHoover } = useContext(CurrentPlaygroundContext);

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
    <div className="home">
      <h1>IHOOVER</h1>
      <img src={vacuumHome} alt="vacuum-home" width={150} height={150} />
      <h2 className="section-title">BIENVENUE SUR LE PLAYGROUND</h2>
      <p>
        Grâce à ce simulateur, vous pourrez contrôler à votre guise notre IHoover dans une
        pièce aux dimensions de votre choix
      </p>
      <form>
        <p>Veuillez choisir les dimensions de votre pièce</p>
        <div className="form-section">
          <div className="form-option">
            <label htmlFor="horizontal">Axe X (horizontal)</label>
            <input
              className="form-input"
              type="number"
              value={grid.columns}
              onChange={handleChangeColumnsNumber}></input>
          </div>
          <div className="form-option">
            <label htmlFor="vertical">Axe Y (vertical)</label>
            <input
              className="form-input"
              type="number"
              value={grid.rows}
              onChange={handleChangeRowsNumber}></input>
          </div>
        </div>
        <p>Veuillez choisir la position initiale de votre IHoover</p>
        <div className="form-section">
          <div className="form-option">
            <label htmlFor="horizontal">Position horizontale</label>
            <input
              className="form-input"
              type="number"
              value={hoover.locationX}
              onChange={handleChangeHooverLocationX}></input>
          </div>
          <div className="form-option">
            <label htmlFor="vertical">Position verticale</label>
            <input
              className="form-input"
              type="number"
              value={hoover.locationY}
              onChange={handleChangeHooverLocationY}></input>
          </div>
          <div className="form-option">
            <label htmlFor="direction">Direction</label>
            <select
              className="form-select"
              name="directions"
              id="direction-select"
              onChange={handleChangeHooverDirection}>
              <option value="N">N</option>
              <option value="E">E</option>
              <option value="W">W</option>
              <option value="S">S</option>
            </select>
          </div>
        </div>
        <NavLink to="/playground">
          <div className="validation-button">
            <input className="commands-button" type="submit" value="C'est parti !" />
          </div>
        </NavLink>
      </form>
    </div>
  );
};

export default Home;
