import React, { Component } from 'react'
import TrendingDirectoryItem from '../trending-dir-item/trending-dir-item.component'
import { products } from './trending-dir.data'

import './trending-dir.styles.scss'

class TrendingDirectory extends Component {
  constructor() {
    super()

    this.state = {
      products: products
    }
  }

  render() {
    return (
      <div className="trending-dir-menu">
        {
          this.state.products.map( ({name, description, img}, idx) => (
            <TrendingDirectoryItem key={idx} name={name} description={description} img={img}/>
          ))
        }
      </div>
    )
  }
}

export default TrendingDirectory;