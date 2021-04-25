import React, { Component } from 'react'
import Homepage from '../Pages/Homepage/homepage.component.jsx'
import NavBar from '../Components/NavBar/navbar.component'
import { Switch, Route } from 'react-router-dom'
import SignInAndUp from '../Pages/Sign-in&up/sign-in-and-up.component.jsx';
import { auth } from '../Firebase/firebase.utility'

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // Subscribe to auth:
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})

      console.log( user )
    })
  }

  componentWillUnmount() {
    // Unsubscribe to auth:
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
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
}

export default App;
