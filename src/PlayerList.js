import React from 'react';
import EditPlayerForm from './EditPlayerForm'

const PlayerList = ({ data, onSend }) => {
  const handleClick = () => {

  }

  const handleDeletePlayer = (player) => {
    onSend(player, true, false);
  }

  return(
  <div>
    <ul>
      { data.map(player => 
        <div>
          <li data-testid={player} key={player} onClick={handleClick}>
            {player}
            <button data-testid={'remove' + player} onClick={() => handleDeletePlayer(player)} value={player}>Delete {player}</button>
            <EditPlayerForm data-testid={'edit' + player} data={player} onSend={onSend} />
          </li>
        </div>
        ) }
    </ul>
  </div>
  )
}

export default PlayerList;