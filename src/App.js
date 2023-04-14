import { useState } from 'react'
import './index.css'
import './components/Header'
import Header from './components/Header'
import Card from './components/Card'
import CardPile from './data/CardPile'
import Button from './components/Button'

function App() {
  const [level, setLevel] = useState(1)
  const [index, setIndex] = useState(0)

  const changeLevel = (level) => {
    setLevel(level)
    setIndex(0) // Reset index to 0 when the level changes so that the index doesn't go out of bounds for the cards of the new level
  }

  const generateNewCard = () => {
    const newIndex = Math.floor(Math.random() * CardPile[level].length)
    setIndex(newIndex)
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="buttonArrangement">
          <Button onClick={() => changeLevel(1)} text={'Level 1'} />
          <Button onClick={() => changeLevel(2)} text={'Level 2'} />
          <Button
            onClick={generateNewCard}
            text={'New card'}
            style={{ backgroundColor: '#ff6a95', color: 'rgba(0, 0, 0, 0.4)' }}
          ></Button>
        </div>
        <Card card={CardPile[level][index]} />
      </div>
    </>
  )
}

export default App
