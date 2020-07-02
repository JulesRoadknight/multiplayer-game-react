import React, { useState } from 'react';
import NewPlayerForm from './NewPlayerForm';
import PlayerList from './PlayerList';
import Game from './Game';

function App() {
  const [players, setPlayers] = useState([]);

  const [gameHasStarted, setGameHasStarted] = useState(false);

  const startGame = () => {
    setGameHasStarted(true);
  }

  const addPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer])
  };

  const deletePlayer = (playerToDelete) => {
    setPlayers(
      players.filter(player => player !== playerToDelete)
    )
  };

  const deleteAll = () => {
    setPlayers([]);
  }

  const editPlayer = (playerToEdit, newPlayerName) => {
    if(!players.includes(newPlayerName)) {
      setPlayers(
        players.map(player => player !== playerToEdit ? player : newPlayerName
        )
      )
    }
  };

  const editOrDeletePlayer = (player, isDelete, isEdit, newPlayerName) => {
    if(isDelete) {
      deletePlayer(player);
    } else if(isEdit) {
      editPlayer(player, newPlayerName)
    }
  }

  if(!gameHasStarted) {
    return (
      <div>
        <NewPlayerForm onSend={addPlayer} />
        <PlayerList onSend={editOrDeletePlayer} data={players} />
        <button data-testid='removeAllPlayers' onClick={deleteAll}>Delete All</button>
        <button data-testid="startGameButton" onClick={startGame}>Start Game</button>

      </div>
    );
  } else {
    return (
      <Game data={players} />
    )
  }
}

export default App;
