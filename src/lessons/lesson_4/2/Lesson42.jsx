import React, { useState } from 'react'

const Lesson42 = () => {
  const [state, setState] = useState({ items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] });

  const List = ({ names }) => {
    return (
      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return <div>
    <List names={state.items} />
    <button onClick={() => {
      state.items.push('пункт');
      setState({ ...state });
    }}>Добавить</button>
  </div>
}

export default Lesson42
