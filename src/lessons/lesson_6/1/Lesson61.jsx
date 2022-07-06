import React, { useState } from 'react'

const Lesson61 = () => {
  const [state, setState] = useState('');

  return <div>
    <p>Text: {state}</p>
    <textarea value={state} onChange={(event) => setState(event.target.value)
    } />
  </div>
}

export default Lesson61
