import React from 'react'

function Button({ onClick, text }) {
  return (
    <button type="button" onClick={onClick} className="button">
      {text}
    </button>
  )
}

export default Button
