import React, { useState } from 'react';

const Game = ({ data }) => {

  const [playerState, setPlayerState] = useState({
    currentPlayer: data[0],
    index: 0
  });

  const changePlayer = () => {
    setPlayerState(prevState => {
      const currentIndex = prevState.index;
      const futureIndex = currentIndex === (data.length - 1) ? 0 : currentIndex + 1;
      return {
        currentPlayer: data[futureIndex],
        index: futureIndex
      }
    })
  }

  const formStyle = {
    position: "relative"
  }

  return(
    <div style={formStyle} data-testid="game">
      <h1 data-testid='currentPlayer' value={playerState.currentPlayer}>{playerState.currentPlayer}</h1>
      <button data-testid="endTurn" onClick={changePlayer}>End Turn</button>
    </div>
  )
}

export default Game;