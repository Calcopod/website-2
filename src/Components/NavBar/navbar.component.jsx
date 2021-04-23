import React from 'react'
import logo from './Assets/default.svg'
import cart from './Assets/cart.svg'
import NavBarItem from '../NavBarItem/navbar-item.component'

import './navbar.styles.scss'

const NavBar = ({}) => {
  return (
    <div className="nav-bar">
    <div className="logo-container">
      <img alt="Logo" className="logo" src={logo} />
    </div>

      <div className="container">
        <NavBarItem title="Products"/>
        <NavBarItem title="Reviews"/>

        { /* Sign in button */ }
        <span className="sign-in-btn"> Sign In </span>

        { /* Cart button */ }
        <img alt="cart" className="cart-btn" src={cart} />
      </div>

    </div>
  )
}

export default NavBar