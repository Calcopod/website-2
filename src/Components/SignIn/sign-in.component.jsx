import React, { Component } from 'react'
import CustomButton from '../CustomButton/custom-btn.component'
import InputForm from '../InputForm/input-form.component'
import { auth, signInWithGoogle } from '../../Firebase/firebase.utility'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Sign user in:
    try {
      const { email, password } = this.state

      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch ( error ) {
      console.error( "An error occured during meial sign-in: ", error )
    }
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
          />

          <InputForm
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
          name="password"
          label="Password"
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleAuth>
            Sign In With Google
          </CustomButton>
        </div>

        </form>
      </div>
    )
  }
}

export default SignIn;