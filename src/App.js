import React from 'react';
// import Home from './components/home.jsx';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
