import React, { useState } from 'react';

const NewPlayerForm = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value)
  }

  const handleSend = () => {
    onSend(inputText);
    setInputText('');
  }

  return(
    <div>
      <input
        type='text'
        data-testid="playerName"
        value={inputText}
        onChange={handleTextChange}
      />
      <button
        data-testid="sendButton"
        onClick={handleSend}
      >Send</button>
    </div>
  )
}

export default NewPlayerForm;