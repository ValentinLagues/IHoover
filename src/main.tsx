import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { CurrentPlaygroundContextProvider } from './contexts/CurrentPlayground';

ReactDOM.render(
  <React.StrictMode>
    <CurrentPlaygroundContextProvider>
      <App />
    </CurrentPlaygroundContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
