import React, { useState } from 'react'

const Lesson711 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      style={{
        border:
          inputValue.length >= 4 && inputValue.length <= 9
            ? '10px solid green' : '10px solid red',
        borderRadius: '10px'
      }}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Lesson711
