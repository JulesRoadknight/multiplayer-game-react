import React from 'react';

const PlayerList = ({ data }) => {
  return(
  <div>
    <ul>
      { data.map(player => <li key={player}>{player}</li>) }
    </ul>
  </div>
  )
}

export default PlayerList;