import React from 'react'

const Header = ({
  text = 'Parents Are Human',
  bgColor = 'rgba(0, 0, 0, 0.4)',
  textColor = '#ff6a95',
}) => (
  <header style={{ backgroundColor: bgColor, color: textColor }}>
    <div className="container">
      <h2>{text}</h2>
    </div>
  </header>
)

export default Header
