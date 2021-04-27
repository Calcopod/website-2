import React from 'react'
import SignIn from '../../Components/SignIn/sign-in.component'
import SignUp from '../../Components/SignUp/sign-up.component'
import './sign-in-and-up.styles.scss'

const SignInAndUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUp;