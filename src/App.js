import React, { useState } from 'react';
import NewPlayerForm from './NewPlayerForm';
import PlayerList from './PlayerList';

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (newPlayer) => {
    setPlayers([newPlayer, ...players])
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

  return (
    <div>
      <NewPlayerForm onSend={addPlayer} />
      <PlayerList onSend={editOrDeletePlayer} data={players} />
      <button data-testid='removeAllPlayers' onClick={deleteAll}>Delete All</button>
    </div>
  );
}

export default App;
