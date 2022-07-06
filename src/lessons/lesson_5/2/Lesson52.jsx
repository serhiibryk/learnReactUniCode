import React, { useState } from 'react'

const Lesson52 = () => {
  const [state, setState] = useState('');

  return <div>
    <input type="text" onChange={(event) => setState(event.target.value)} value={state} />
    <p>{state.toUpperCase()}</p>
  </div>

}

export default Lesson52
