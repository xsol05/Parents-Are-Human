import { useState, useEffect } from 'react'
import './index.css'
import './components/Header'
import Header from './components/Header'
import Card from './components/Card'
import Cards from './data/Cards'
import Button from './components/Button'

function App() {
  const [level, setLevel] = useState(1)
  const [cardsPile, setCardsPile] = useState(
    Cards.filter((card) => card.level === level)
  )
  const [cardIndex, setCardIndex] = useState(
    Math.floor(Math.random() * cardsPile.length)
  )

  const handleButtonClick = (level) => {
    setLevel(level)
  }

  useEffect(() => {
    setCardsPile(Cards.filter((card) => card.level === level))
    // generateNewCard()
    console.log('level', level)
    console.log('cardsPile', cardsPile)
  }, [level])

  // const generateNewCard = () => {
  //   setCardIndex(Math.floor(Math.random() * cardsPile.length))
  // }

  return (
    <>
      <Header />
      <div className="container">
        <div className="buttonArrangement">
          <Button onClick={() => handleButtonClick(1)} text={'Level 1'} />
          <Button onClick={() => handleButtonClick(2)} text={'Level 2'} />
          {/* <Button
            onClick={generateNewCard}
            text={'New card'}
            style={{ backgroundColor: '#ff6a95', color: 'rgba(0, 0, 0, 0.4)' }}
          ></Button> */}
        </div>
        <Card card={cardsPile.filter((card) => card.level === level)} />
      </div>
    </>
  )
}

export default App
