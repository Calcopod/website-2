import React, { Component } from 'react'
import { reviews } from './reviews.data'
import './dir3.styles.scss'
import ReviewDirComponent from '../rev-dir-item/rev-dir-item.component'

class ReviewDirectory extends Component {
  constructor() {
    super()

    this.state = {
      reviews: reviews,
    }
  }

  render() {
    return (
      <div className="rev-dir-menu">
        {
          this.state.reviews.map( ({text, author, logo_url}, idx) => (
            <ReviewDirComponent key={idx} author={author} text={text} logo_url={logo_url} />
          ))
        }
      </div>
    )
  }
}

export default ReviewDirectory