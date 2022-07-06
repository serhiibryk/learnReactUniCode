import React, { useState } from 'react'

const Lesson67 = () => {
  const [texts, setTexts] = useState({ text: [], newText: '' });

  const handleChange = (event) => setTexts({ ...texts, newText: event.target.value });

  const handleClick = () => {
    texts.text.push(texts.newText);
    setTexts({ ...texts, newText: '' });
  };

  return <div>
    <textarea value={texts.newText} onChange={handleChange} />
    <button onClick={handleClick}>Add text to list</button>
    {texts.text.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
}

export default Lesson67
