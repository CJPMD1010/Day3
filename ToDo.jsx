import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function ToDo() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      setData([...data, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Enter Text"
        value={inputText}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <br />
      <br />
      <ol>
        {data.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
