import React, { useState } from 'react'

const Lesson53 = () => {
  const [state, setState] = useState('');


  return <div>
    <input type="date" onChange={(event) => setState(event.target.value)} value={state} />
    <p>{state}</p>
  </div>

}

export default Lesson53
