import React from 'react'

function Card({ card }) {
  return (
    <div className="card">
      <div className="cardDetails">
        <p>Level {card.level}</p>
        <p>{card.topic}</p>
      </div>
      <h1>{card.englishQuestion}</h1>
      <h1>{card.simChineseQuestion}</h1>
    </div>
  )
}

export default Card
