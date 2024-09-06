import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Header = ({
  text = 'Parents Are Human',
  bgColor = '#4b4d4e',
  textColor = '#fff',
}) => {
  const [showInfo, setShowInfo] = useState(false)
  const toggleInfoBox = () => {
    setShowInfo((prevState) => !prevState)
  }

  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{ marginRight: '20px', height: '25px', width: '25px' }}
        onClick={toggleInfoBox}
      />
      {showInfo && (
        <div className="infoBox">
          <p>
            <a href="https://parentsarehuman.com/">
              <strong>Parents Are Human</strong>
            </a>{' '}
            is a card game designed to spark deep conversations between you and
            your loved ones.
          </p>
          <br />
          <p>
            💙 <strong>Blue - Question Cards</strong> prompt stories and
            conversations around Life Events, Wisdom, Identity, and
            Relationships.
          </p>
          <p>
            ❤️ <strong>Red - Action Cards</strong> add elements of courage and
            play into the experience.
          </p>
          <p>
            1️⃣ <strong>Level 1</strong> cards are light and easy.
          </p>
          <p>
            2️⃣ <strong>Level 2</strong> cards dig deeper.
          </p>
          <br />
          <p>
            Note: This is based off the{' '}
            <a href="https://parentsarehuman.notion.site/Parents-Are-Human-Simplified-Chinese-Edition-f366bec52e5b446d841b7dfaf81d8cd3">
              free digital version
            </a>{' '}
            of Parents are Human.
          </p>
          <br></br>
          <p>
            <i>
              Coded with ❤ by{' '}
              <a href="https://magdelinehuang.com/">Magdeline Huang</a>
            </i>
          </p>
        </div>
      )}
    </header>
  )
}

export default Header
