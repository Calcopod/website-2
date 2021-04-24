import React from 'react'
import './input-form.styles.scss'

const InputForm = ( {label, value, ...otherProps } ) => (
  <div className="group">
    <input className="form-input"
      value={value}
      { ...otherProps }
    />
    {
      label ? 
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      : null
    }
  </div>
)

export default InputForm