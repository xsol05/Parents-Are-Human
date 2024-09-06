import React from 'react'

const History = ({ cards }) => (
  <div>
    <h3>History</h3>
    <ul>
      {cards.map((card, index) => (
        <li key={index}>{card.englishQuestion}</li>
      ))}
    </ul>
  </div>
)

export default History
