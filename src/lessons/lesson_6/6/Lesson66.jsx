import React, { useState } from 'react'

const Lesson66 = () => {
  const [state, setState] = useState('1');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return <div>
    <p>{state}</p>
    <input type="radio" value="1" checked={state === '1'} onChange={handleChange} />
    <input type="radio" value="2" checked={state === '2'} onChange={handleChange} />
    <input type="radio" value="3" checked={state === '3'} onChange={handleChange} />
  </div>
}

export default Lesson66
