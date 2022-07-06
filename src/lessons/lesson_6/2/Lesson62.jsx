import React, { useState } from 'react'

const Lesson62 = () => {
  const [state, setState] = useState(true);

  return <div>
    <input type="checkbox" checked={state} onChange={() => setState(!state)} />
    <p>{state ? 'true' : 'false'}</p>
  </div>
}

export default Lesson62
