import React, { useState } from 'react'

const Lesson44 = () => {
  const [state, setState] = useState({ items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] });

  const List = ({ names, removeFunc }) => {
    return (
      <ul>
        {names.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFunc(index)}>DELETE NAME</button>
          </li>
        ))}
      </ul>
    );
  };

  const removeElement = (index) => {
    state.items.splice(index, 1);
    setState({ ...state });
  };

  return <div>
    <List names={state.items} removeFunc={removeElement} />
    <button onClick={() => {
      state.items.push('пункт');
      setState({ ...state });
    }}>ADD NAME</button>
  </div>
}

export default Lesson44
