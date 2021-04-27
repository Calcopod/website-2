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
  unsubscribeFromUserSnap = null

  componentDidMount() {
    // Subscribe to auth:
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      // Check for sign-in rather than sign-out

      // Snapshot returns never-ending function always checking for new input, which in this case is never, cuz I don't update users.
      // That's why I cna just use, userRef.

      if( user ) {
        const userRef = await createUserProfile( user );
        
        this.unsubscribeFromUserSnap = userRef.onSnapshot( snapshot => {
          const userData = snapshot.data()

          this.setState({currentUser: {
            ...userData,
            uid: snapshot.id
          }}, () => console.log( "Current user: ", this.state.currentUser ) )
        })
      }
      else {
        this.setState({ currentUser: null })
      }
    })
  }

  componentWillUnmount() {
    // Unsubscribe to auth and other listeners:
    this.unsubscribeFromAuth()
    this.unsubscribeFromUserSnap()
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
        <h1>{this.state.currentUser?.displayName}</h1>
      </div>
    );
  }
}

export default App;
