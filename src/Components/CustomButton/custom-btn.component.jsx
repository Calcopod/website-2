import React from 'react'
import './custom-btn.styles.scss'

const CustomButton = ( { isGoogleAuth, children, ...otherProps } ) => (
  <button 
    className={`${isGoogleAuth ? 'google-btn' : ''} custom-button`}
    { ...otherProps }
  >
    { children }
  </button>
)

export default CustomButton