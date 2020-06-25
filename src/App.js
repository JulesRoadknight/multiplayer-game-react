import React, { useState } from 'react';
import NewPlayerForm from './NewPlayerForm';
import PlayerList from './PlayerList';

function App() {
  const [players, setPlayers] = useState([]);
  const handleSend = (newPlayer) => {
    setPlayers([newPlayer, ...players])
  };

  return (
    <div>
      <NewPlayerForm onSend={handleSend} />
      <PlayerList data={players} />
    </div>
  );
}

export default App;
