import React, { useState } from 'react'


const Lesson64 = () => {
  const [state, setState] = useState({
    villages: ['Пісюнці', 'Зажопье', 'Жопа', 'Жмеринка', 'Хацапетовка', 'Волосянка', 'Драбів', 'Обухів', 'Чмирівка'],
    currentVillage: 'Пісюнці'
  });

  const Select = ({ values, changeFunc }) => {
    return (
      <select value={state.currentVillage} onChange={changeFunc}>
        {state.villages.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    );
  };


  return <div>
    <p>Выбор: {state.currentVillage}</p>
    <Select option={state} values={state} changeFunc={(event) => {
      setState({ ...state, currentVillage: event.target.value })
    }}
    />
  </div >

}
export default Lesson64
