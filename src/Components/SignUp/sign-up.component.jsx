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

    const { displayName, email, password, verifyPassword } = this.state;

    // Check if password and password verify are the same:
    if( password !== verifyPassword ) {
      alert("Passwords do not match!")
      return
    };

    try {
      // Auth user using firebase:
      const { user } = await auth.createUserWithEmailAndPassword( 
        email, 
        password 
      )

      await createUserProfile( user, { displayName } )

      // Clear inputs:
      this.setState({
        displayName: '',
        email: '',
        password: '',
        verifyPassword: ''
      })

    } catch ( error ) {
      console.error("An error occured during email sign-up: ", error)
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
            type="password"
            name="password"
            label="Password:"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <InputForm
            type="password"
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