import React from 'react'

const Lesson31 = () => {
  const state = { show: 'true', name: 'Иван' };

  return <div>
    <p>{state.show ? "hello" : 'goodbye'}, {state.name}</p>
    {/* {state.show ?
      <p>Hello,{state.name}</p> :
      <p>Good buy,{state.name}</p>} */}
  </div>
}

export default Lesson31
