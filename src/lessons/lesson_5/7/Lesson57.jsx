import React, { useState } from 'react'

const Lesson57 = () => {
  const [state, setState] = useState({ name: ' ', surname: ' ', pathronimic: ' ', fullName: '' });

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    });
  };

  return <div>
    <input type="text" name="name" value={state.name} onChange={handleChange} />
    <input type="text" name="surname" value={state.surname} onChange={handleChange} />
    <input type="text" name="pathronimic" value={state.pathronimic} onChange={handleChange} />
    <button onClick={() => {
      const copyState = { ...state };
      copyState.fullName = String(copyState.name + copyState.surname + copyState.pathronimic);
      setState(copyState);
    }}>Get full name</button>
    <p>{state.fullName}</p>
  </div>
}

export default Lesson57
