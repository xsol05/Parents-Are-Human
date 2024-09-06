import React, { useState } from 'react'
import './index.css'
import './components/Header'
import Header from './components/Header'
import Card from './components/Card'
import CardPile from './data/CardPile'
import Button from './components/Button'
import History from './components/History'

type CardType = {
  id: number
  level: number
  type: string
  topic: string
  englishQuestion: string
  simChineseQuestion: string
}

const App = () => {
  const [level, setLevel] = useState(1)
  const [index, setIndex] = useState(0)
  const [usedCards, setUsedCards] = useState<CardType[]>([])

  const changeLevel = (level: number) => {
    setLevel(level)
    setIndex(0) // Reset index to 0 when the level changes so that the index doesn't go out of bounds for the cards of the new level
    setUsedCards([])
  }

  const addUsedCard = (card: CardType) => {
    setUsedCards((prevUsedCards) => [...prevUsedCards, card])
  }

  // Generate new card:
  // 1. Current card question gets rendered in history list
  // 2. Generate a new card that does not have the same index as any card in history list
  const generateNewCard = () => {
    if (usedCards.length === CardPile[level].length - 1) {
      alert('Congrats! You have gone through all the cards for this level 🥳')
      return
    }

    const oldIndex = index

    // Generate a new index until it is not present in usedCards
    let newIndex = Math.floor(Math.random() * CardPile[level].length)
    while (
      usedCards.map((card) => card.id).includes(CardPile[level][newIndex].id) ||
      newIndex === oldIndex
    ) {
      newIndex = Math.floor(Math.random() * CardPile[level].length)
    }

    addUsedCard(CardPile[level][oldIndex])
    setIndex(newIndex)
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="buttonArrangement">
          <Button onClick={() => changeLevel(1)} text={'Level 1'} />
          <Button onClick={() => changeLevel(2)} text={'Level 2'} />
          <Button onClick={generateNewCard} text={'New card'}></Button>
        </div>
        <Card card={CardPile[level][index]} />
        <History cards={usedCards} />
      </div>
    </>
  )
}

export default App
