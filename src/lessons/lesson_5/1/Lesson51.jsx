import React, { useState } from 'react'

const Lesson51 = () => {
  const [state, setState] = useState('');

  return <div>
    <input type="text" onChange={(event) => setState(event.target.value)} value={state} />
    <p>{state}</p>
  </div>

}

export default Lesson51
