import React from 'react'

const Button = ({ className, onSubmit, disabled, text }) => (
  <button
    type="submit"
    onClick={onSubmit}
    disabled={disabled}
    className={className}
  >
    {text}
  </button>
)

export default Button
