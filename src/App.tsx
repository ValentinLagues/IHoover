import './App.css';

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Playground from './components/playground/Playground';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
};

export default App;
