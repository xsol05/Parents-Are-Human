import React from 'react'

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick} className="button">
    {text}
  </button>
)

export default Button
