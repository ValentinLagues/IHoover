import './App.css';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to IHoover playground</h1>
      <form>
        <div>
          <p>Please select the size of the room you want to clean</p>
          <label htmlFor="horizontal">Horizontal</label>
          <input type="number" min="1" max="100"></input>
          <label htmlFor="vertical">Vertical</label>
          <input type="number" min="1" max="100"></input>
        </div>
        <div>
          <p>Please select the initial position of your wonderful hoover</p>
          <label htmlFor="horizontal">Horizontal</label>
          <input type="number" min="1" max="100"></input>
          <label htmlFor="vertical">Vertical</label>
          <input type="number" min="1" max="100"></input>
          <label htmlFor="direction">Direction</label>
          <select name="directions" id="direction-select">
            <option value="">--Please choose a direction--</option>
            <option value="N">N</option>
            <option value="E">E</option>
            <option value="W">W</option>
            <option value="S">S</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Let's go !" />
        </div>
      </form>
    </div>
  );
};

export default App;
