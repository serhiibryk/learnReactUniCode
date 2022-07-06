import React, { useState } from 'react'

const Lesson714 = () => {
  const [state, setState] = useState({ string: [], currentString: '' });

  const Select = ({ data, changeFunc }) => {
    return (
      <select value={state.currentString} onChange={changeFunc}>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    );
  };

  return <div>
    <Select data={state.string} changeFunc={(event) => {
      setState({ ...state, currentString: event.target.value })
    }} />
    <input
      type="text"
      value={state.currentString}
      onChange={(event) => {
        setState({ ...state, currentString: event.target.value })
      }} />
    <button onClick={() => {
      state.string.push(state.currentString);
      setState({ ...state, currentString: '' });
    }}>Add</button>
    <p>{state.currentString}</p>
  </div>
}

export default Lesson714
