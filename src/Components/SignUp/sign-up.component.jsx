import React, { Component } from 'react'
import CustomButton from '../CustomButton/custom-btn.component'
import InputForm from '../InputForm/input-form.component'
import { auth, createUserProfile } from '../../Firebase/firebase.utility'
import './sign-up.styles.scss'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      verifyPassword: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    // Check if password and password verify are the same:
    if( this.state.password !== this.state.verifyPassword ) {
      alert("Passwords do not match!")
      return
    };
  
    const { displayName } = this.state

    try {
      // Auth user using firebase:
      const { user } = auth.createUserWithEmailAndPassword( this.state.email, this.state.password )
      
      const userObj = {
        displayName: displayName,
        ...user
      }

      createUserProfile( userObj )

    } catch ( error ) {
      console.log("An error occured during email sign-up: ", error)
    }

  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your emailand password</span>
        <form  onSubmit={this.handleSubmit}>
          <InputForm
            type="text"
            name="displayName"
            label="Display Name:"
            value={this.state.displayName}
            onChange={this.handleChange}
            required
          />

          <InputForm
            type="text"
            name="email"
            label="Email:"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <InputForm
            type="text"
            name="password"
            label="Password:"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <InputForm
            type="text"
            name="verifyPassword"
            label="Verify Password:"
            value={this.state.verifyPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton
            type="submit"
          > SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;