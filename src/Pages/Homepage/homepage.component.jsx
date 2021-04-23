import React from 'react';
import NavBar from '../../Components/NavBar/navbar.component'
import Footer from '../../Components/Footer/footer.component'
import ReviewDirectory from '../../Components/Directory3/rev-dir/dir3.component';
import TrendingDirectory from '../../Components/Directory3/trending-dir/trending-dir.component';

import { withRouter } from 'react-router-dom'

import './homepage.styles.scss'

const Homepage = ({match, history}) => {
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

          <button className="shop-btn" onClick={() => history.push(`${match.url}sign-in`)}>Shop now</button>

        </div>
      </div>

      <div className="reviews-container">
        <h1 className="head"> Reviews </h1>
        <hr className="divider thick blue"/>
        <ReviewDirectory />
      </div>

      <hr style={{width: '100%', margin: '4vh 0 0 0'}} />

      <div className="trending">
        <h1 className="head"> Trending now</h1>
        <hr className="divider thick blue"/>
        <TrendingDirectory />
      </div>

      <Footer />
    </div>
  )
}

export default withRouter(Homepage);