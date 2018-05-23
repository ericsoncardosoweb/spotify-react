import React from 'react'

const InputLine = ({ input, label, type, meta: { asyncValidating, touched, error, warning } }) => (
  <div className={`form-group form-line ${touched && ( (error && 'has-error'))}` }>
    <div className={`input ${asyncValidating ? 'async-validating loading' : ''}`}>
      <input {...input} type={type} />
      <label htmlFor={input.name}>{label}</label>
      {touched && ( (error && <span className="help-text error">{error}</span>) )}
    </div>
  </div>
)

export default InputLine