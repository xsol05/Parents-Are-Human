import React from 'react'

const Card = ({ card }) => (
  <div
    className="card"
    style={{
      backgroundColor:
        card && card.topic === 'Action'
          ? '#9A3324'
          : card
          ? '#1D4289FF'
          : undefined,
    }}
  >
    {card && (
      <>
        <div className="cardDetails">
          <p>Level {card.level}</p>
          <p>{card.topic}</p>
        </div>
        <h1>{card.englishQuestion}</h1>
        <h1>{card.simChineseQuestion}</h1>
      </>
    )}
    {!card && (
      <>
        <h1>Congrats! 🥳</h1>
        <p>You have finished all the cards in this level!</p>
      </>
    )}
  </div>
)

export default Card
