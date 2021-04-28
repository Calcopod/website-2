import React, { Component } from 'react'
import Homepage from '../Pages/Homepage/homepage.component.jsx'
import NavBar from '../Components/NavBar/navbar.component'
import { Switch, Route } from 'react-router-dom'
import SignInAndUp from '../Pages/Sign-in&up/sign-in-and-up.component.jsx';
import { auth, createUserProfile } from '../Firebase/firebase.utility'

import { setCurrentUser } from '../Redux/user//user-actions'
import { connect } from 'react-redux'

import './App.css';

class App extends Component {
  unsubscribeFromAuth = null
  unsubscribeFromUserSnap = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    // Subscribe to auth:
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      // Check for sign-in rather than sign-out

      // Snapshot returns never-ending function always checking for new input, which in this case is never, cuz I don't update users.
      // That's why I cna just use, userRef.

      if( user ) {
        const userRef = await createUserProfile( user );
        
        this.unsubscribeFromUserSnap = userRef.onSnapshot( snapshot => {
          const userData = snapshot.data()

          setCurrentUser({
            ...userData,
            uid: snapshot.id
          })
        })
      }
      else {
        setCurrentUser( null )
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
        <NavBar/>
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser( user ) )
})

export default connect(null, mapDispatchToProps )(App);
