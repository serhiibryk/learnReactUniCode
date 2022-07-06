import React, { useState } from 'react'

const Lesson69 = () => {
  const [state, setState] = useState(-1);

  const changeSelect = (item) => {
    let result: number = state;

    if (item === true || item === '1') result = 1;
    else result = -1;

    setState(result);
  };

  return <div>
    <input type="checkbox"
      checked={state === 1}
      onChange={(event) => changeSelect(event.target.checked)} />
    <select
      value={state}
      onChange={(event) => changeSelect(event.target.value)}>
      <option value={-1}>-</option>
      <option value={1}>+</option>
    </select>
  </div>
}
export default Lesson69
