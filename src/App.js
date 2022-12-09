import './index.css'
import './components/Header'
import Header from './components/Header'
import Card from './components/Card'
import LevelOneCards from './data/LevelOneCards'

function App() {
  const cardIndex = Math.floor(Math.random() * 22)

  return (
    <>
      <Header />
      <div className="container">
        <Card card={LevelOneCards[cardIndex]} />
      </div>
    </>
  )
}

export default App
