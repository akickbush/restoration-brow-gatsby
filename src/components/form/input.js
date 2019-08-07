import React from 'react'

const Input = ({
  type,
  name,
  pattern,
  value,
  id,
  inputMode,
  onChange,
  label,
  error,
}) => (
  <span className="input input--ruri montserrat-regular">
    <input
      className={
        value || error
          ? 'input__field input__field--ruri value'
          : 'input__field input__field--ruri'
      }
      placeholder={error ? error : ''}
      type={type}
      name={name}
      pattern={pattern}
      value={value}
      id={id}
      inputMode={inputMode}
      onChange={onChange}
    />
    <label
      className={
        error
          ? 'input__label input__label--ruri ruri-error'
          : 'input__label input__label--ruri'
      }
      htmlFor={id}
    >
      <span className="input__label-content input__label-content--ruri">
        {label}
      </span>
    </label>
  </span>
)

export default Input
