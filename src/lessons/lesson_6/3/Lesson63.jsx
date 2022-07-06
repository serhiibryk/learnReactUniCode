import React, { useState } from 'react'

const Lesson63 = () => {
  const [state, setState] = useState(true);

  return <div>
    <input type="checkbox" checked={state} onChange={() => setState(!state)} />
    <p>{state ? 'Абзац с каким-то текстом' : false}</p>
  </div>
}

export default Lesson63
