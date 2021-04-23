import React from 'react'
import './trending-dir-item.scss'

const TrendingDirectoryItem = ( {name, description, img} ) => {
  return (
    <div className="trending-item">
      <div className="container">
        <div className="image-container">
          <img className="image" alt={`product: ${name}`} src={img}/>
        </div>

        <span className="name">{name}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  )
}

export default TrendingDirectoryItem;