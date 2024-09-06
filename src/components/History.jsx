import React from 'react'

const History = ({ cards }) => (
  <div className="history">
    <details>
      <summary>Previous Questions</summary>
      <ul style={{ listStyleType: 'disc' }}>
        {cards.map((card, index) => (
          <li key={index}>
            {card.englishQuestion} {card.simChineseQuestion}
          </li>
        ))}
      </ul>
    </details>
  </div>
)

export default History
