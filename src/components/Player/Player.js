import React from "react";
import './Player.css';

function Player({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = React.useState(initialName)
  const [isEditing, setIsEditing] = React.useState(false);
  
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="'player-name">{playerName}</span>

  if(isEditing) {
    editablePlayerName = 
      <input type="text" required value={playerName} onChange={handleChange}/>
    
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player;