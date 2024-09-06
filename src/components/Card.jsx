import React from 'react'

const Card = ({ card }) => (
  <div className="card">
    <div className="cardDetails">
      <p>Level {card.level}</p>
      <p>{card.topic}</p>
    </div>
    <h1>{card.englishQuestion}</h1>
    <h1>{card.simChineseQuestion}</h1>
  </div>
)

export default Card
