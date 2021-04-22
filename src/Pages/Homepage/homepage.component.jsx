import React from 'react';
import NavBar from '../../Components/NavBar/navbar.component'
import Footer from '../../Components/Footer/footer.component'
import './homepage.styles.scss'

const Homepage = ({}) => {
  return (
    <div className="homepage">
      <NavBar />

      <div className="main">
        Main
      </div>

      <Footer />
    </div>
  )
}

export default Homepage;