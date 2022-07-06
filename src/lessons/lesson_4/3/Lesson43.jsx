import React, { useState } from 'react'

const Lesson43 = () => {
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
    }}>ADD NAME</button>
    <button onClick={() => {
      setState({ items: state.items.slice(0, -1) });
    }}>DELETE NAME</button>
  </div>
}

export default Lesson43
