import React from 'react'
import gameLogo from '../../../public/game-logo.png'
function Header() {
  return (
    <header>
        <img src={gameLogo}/>
        <h1>Tic-Tac-Toe</h1>
    </header>
  )
}

export default Header