import React from 'react';
import NavBar from '../../Components/NavBar/navbar.component'
import Footer from '../../Components/Footer/footer.component'
import './homepage.styles.scss'

const Homepage = ({}) => {
  return (
    <div className="homepage">
      <NavBar />

      <div className="main">

        <div className="container">

        <div className="head">
          <h1 className="title">Serban's Tuica SRL</h1>
          <p className="description">
          Award winning products with the most <br/>
          fancy and great taste you ever saw.
          </p>
        </div>

          <button className="shop-btn">Shop now</button>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Homepage;