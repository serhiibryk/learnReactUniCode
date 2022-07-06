import React, { useState } from 'react'

const Lesson612 = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <input type="text" disabled={!state} />
      <input type="checkbox"
        checked={state}
        onChange={(event) =>
          setState(event.target.checked)} />
    </div>
  );
}

export default Lesson612
