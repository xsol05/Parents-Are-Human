import React from 'react'

const Button = ({ onClick, text, variant }) => {
  const buttonClass = variant === 'newCard' ? 'button newCardButton' : 'button'

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {text}
    </button>
  )
}

export default Button
