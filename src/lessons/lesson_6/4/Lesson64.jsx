import React, { useState } from 'react'


const Lesson64 = () => {
  const [state, setState] = useState('Зажопье');

  const choise = (e) => {
    setState(e.target.value);
  };

  return <div>
    <select value={state} onChange={choise}>
      <option>Жопа</option>
      <option>Жмеринка</option>
      <option>Хацапетовка</option>
      <option>Волосянка</option>
      <option>Драбів</option>
      <option>Обухів</option>
      <option>Чмирівка</option>
    </select>
  </div >
}

export default Lesson64
