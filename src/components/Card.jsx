import React from 'react'

const Card = ({ card }) => (
  <div className="card">
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
        <h1>Congratulations! 🥳</h1>
        <p>You have finished all the cards in this level!</p>
      </>
    )}
  </div>
)

export default Card
