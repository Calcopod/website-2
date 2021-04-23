import React from 'react'
import Homepage from '../Pages/Homepage/homepage.component.jsx'
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path='/store'>
          Welcome to store
        </Route>
        <Route exact path='/reviews'>
          This is amazing. <br />
            -Someone, sometime
        </Route>
        <Route exact path="/sign-in">
          Sign in
        </Route>
      </Switch>
    </div>
  );
}

export default App;
