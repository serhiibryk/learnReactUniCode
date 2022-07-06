import React, { useState } from 'react'

const Lesson55 = () => {
  const [state, setState] = useState({ valueImput: '', valueReturn: '' });

  return <div>
    <input type="text" onChange={
      (event) => {
        setState({
          ...state,
          valueImput: event.target.value
        })
      }}
      value={state.valueImput} />
    <button onClick={
      () => {
        const copyStr = { ...state };
        copyStr.valueReturn = copyStr.valueImput;
        copyStr.valueImput = '';
        setState(copyStr);
      }}>Submit</button>
    <p>{state.valueReturn}</p>
  </div>
}

export default Lesson55
