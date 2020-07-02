import React, { useState } from 'react';

const Game = ({ data }) => {
  const formStyle = {
    position: "relative"
  }

  return(
    <div style={formStyle} data-testid="game">
      <h1 data-testid='currentPlayer'>{data[0]}</h1>
    </div>
  )
}


export default Game;