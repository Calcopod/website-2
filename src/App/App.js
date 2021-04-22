import React from 'react'
import Homepage from '../Pages/Homepage/homepage.component.jsx'
import { BrowserRouter } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
