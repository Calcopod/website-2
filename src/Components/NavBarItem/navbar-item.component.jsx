import React from 'react'
import { Link } from 'react-router-dom'
import './navbar-item.styles.scss'

const NavBarItem = ( {title, to_url} ) => {
  return (
    <div className="nav-bar-item">
      <Link className="link" to={to_url}>
        {title}
      </Link>
    </div>
  )
}

export default NavBarItem;