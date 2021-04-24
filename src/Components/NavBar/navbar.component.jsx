import React from 'react'
import logo from './Assets/default.svg'
import cart from './Assets/cart.svg'

import { Link } from 'react-router-dom'

import './navbar.styles.scss'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-container" to="/">
        <Link to="/">
          <img alt="Logo" className="logo" src={logo} />
        </Link>
      </div>

      <div className="container">
        <Link className="option" to="/store">Prodcuts</Link>
        <Link className="option" to="/reviews">Reviews</Link>

        <Link className="option" to="/sign-in"> Sign In </Link>

        <Link className="option" to="/cart">
          <img className="cart-btn" alt="cart" src={cart} />
        </Link>
      </div>

    </div>
  )
}

export default NavBar