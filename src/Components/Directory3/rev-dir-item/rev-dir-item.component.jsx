import React from 'react'
import './rev-dir-item.styles.scss'

const ReviewDirComponent = ({text, author, logo_url}) => {
  return (
    <div className="review-item">
      <span className="text">{text}</span>
      {
        logo_url ? 
        <img alt="Company logo" src={logo_url} className="logo-img" /> 
        :
        <h1 className="logo-txt">{author}</h1>
      }
    </div>
  )
}

export default ReviewDirComponent;