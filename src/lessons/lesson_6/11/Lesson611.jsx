import React, { useState } from 'react'

const Lesson611 = () => {
  const [state, setState] = useState({ string: ['Ганьба', 'На вила', 'Вийди розбійник'], currentString: '' });

  const Select = ({ data }) => {
    return (
      <select>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    )
  };

  return <div>
    <Select data={state.string} />
    <input type="text"
      value={state.currentString}
      onChange={(event) => {
        setState({ ...state, currentString: event.target.value })
      }} />
    <button onClick={() => {
      state.string.push(state.currentString);
      setState({ ...state, currentString: '' });
    }}>Add string</button>
  </div >
}

export default Lesson611
