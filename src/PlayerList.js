import React, { useState } from 'react';
import EditPlayerForm from './EditPlayerForm'

const PlayerList = ({ data, onSend }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleDeletePlayer = (player) => {
    onSend(player, true, false);
  }

  return(
  <div>
    <h3>Currently have {data.length} players:</h3>
    <ul>
      { data.map(player => 
        <div>
          <li data-testid={player} key={player}>
            { isEditing === false &&
              <p data-testid={'display' + player} onClick={toggleIsEditing}>{player}</p>
            }
            { isEditing === true &&
              <>
                <EditPlayerForm data-testid={'edit' + player} data={player} onSend={onSend} />
                <button onClick={toggleIsEditing} >Cancel Edit</button>
              </>
            }
            <button data-testid={'remove' + player} onClick={() => handleDeletePlayer(player)} value={player}>Delete {player}</button>
          </li>
        </div>
        )}
    </ul>
  </div>
  )
}

export default PlayerList;