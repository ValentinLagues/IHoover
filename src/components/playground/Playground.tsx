import './Playground.css';

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import CurrentPlaygroundContext from '../../contexts/CurrentPlayground';
import Hoover from '../hoover/Hoover';

const Playground = () => {
  const { grid, hoover, setHoover, moveHoover, moveHooverViaInstructions } = useContext(
    CurrentPlaygroundContext,
  );
  // variable d'état qui permet de stocker les instructions du hoover
  const [hooverInstructions, setHooverInstructions] = useState('');

  // autorise seulement les caractères sélectionnés pour les instructions
  const checkDGA = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.key !== 'd' && // todo rajouter les majuscules
      e.key !== 'g' &&
      e.key !== 'a' &&
      e.key !== 'Enter' &&
      e.key !== 'Backspace'
    ) {
      e.preventDefault();
    }
  };

  // fonction pour parcourir les instructions entrées dans l'input et les exécuter
  const handleChange = () => {
    setHoover(moveHooverViaInstructions(hooverInstructions, hoover));
  };

  // fonction qui permet de stocker les valeurs de l'input des instructions dans la variable d'état
  const handleHooverInstructions = (e: React.FormEvent<HTMLInputElement>) => {
    setHooverInstructions(e.currentTarget.value);
  };

  // fonction qui permet de réinitialiser l'input des instructions
  const resetInstructions = () => {
    setHooverInstructions('');
  };

  return (
    <div className="playground">
      <h2>PLAYGROUND</h2>
      <div className="playground-config">
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
          <Hoover hoover={hoover} grid={grid} />
        </div>
        <div className="playground-pad">
          <div className="instructions">
            <p>
              Utilisez la ligne de commandes pour entrer vos instructions et appuyez sur
              ENVOYER pour les valider <br /> Vous pouvez également nettoyer la ligne de
              commandes en appuyant sur le bouton RESET INSTRUCTIONS
            </p>
            <p>Le hoover peut également être contrôlé au clic en temps réel !</p>
            <p>
              Pour revenir à la page précédente et reconfigurer le playground, cliquez sur
              le bouton RESET PLAYGROUND
            </p>
          </div>
          <div className="location">
            <p>HOOVER CURRENT LOCATION</p>
            <p>
              X : {hoover.locationX}, Y : {hoover.locationY}, dir : {hoover.direction}
            </p>
          </div>
          <form onSubmit={handleChange} className="commands-list">
            <input
              className="commands-input"
              type="text"
              onKeyDown={checkDGA}
              placeholder="Entrez vos commandes"
              value={hooverInstructions}
              onChange={handleHooverInstructions}
            />
            <input className="commands-button" type="submit" value="Valider"></input>
          </form>
          <button onClick={resetInstructions}>RESET INSTRUCTIONS</button>
          <div className="commands">
            <button onClick={() => setHoover(moveHoover('g', hoover))}>- 90°</button>
            <button onClick={() => setHoover(moveHoover('a', hoover))}>Move</button>
            <button onClick={() => setHoover(moveHoover('d', hoover))}>+ 90°</button>
          </div>
          <NavLink to="/">
            <div>
              <input type="submit" value="RESET PLAYGROUND" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Playground;
