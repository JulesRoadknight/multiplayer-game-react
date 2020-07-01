import React, { useState } from 'react';

const EditPlayerForm = ({ data, onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value)
  }

  const handleSend = () => {
    onSend(data, false, true, inputText);
    setInputText('');
  }

  const formStyle = {
    position: "relative"
  }

  return(
    <div style={formStyle}>
      <input
        type='text'
        data-testid={"edit" + data}
        value={inputText}
        onChange={handleTextChange}
      />
      <button
        data-testid={"update" + data}
        onClick={handleSend}
      >Send</button>
    </div>
  )
}


export default EditPlayerForm;