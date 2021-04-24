import React from 'react'
import Homepage from '../Pages/Homepage/homepage.component.jsx'
import NavBar from '../Components/NavBar/navbar.component'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import SignInAndUp from '../Pages/Sign-in&up/sign-in-and-up.component.jsx';

function App() {
  return (
    <div>
      <NavBar />
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
          <SignInAndUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
