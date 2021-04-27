import React, { Component } from 'react'
import Homepage from '../Pages/Homepage/homepage.component.jsx'
import NavBar from '../Components/NavBar/navbar.component'
import { Switch, Route } from 'react-router-dom'
import SignInAndUp from '../Pages/Sign-in&up/sign-in-and-up.component.jsx';
import { auth, createUserProfile } from '../Firebase/firebase.utility'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      // Check for sign-in rather than sign-out

      // Snapshot returns never-ending function always checking for new input, which in this case is never, cuz I don't update users.
      // That's why I cna just use, userRef.

      if( user ) {
        const userRef = await createUserProfile( user );
        const userSnapShot = await userRef.get();
        const userData = await userSnapShot.data();

        this.setState({currentUser: {
          ...userData,
          uid: userSnapShot.id
        }}, () => console.log( this.state.currentUser ) )
      }
      else {
        this.setState({ currentUser: null })
      }
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
