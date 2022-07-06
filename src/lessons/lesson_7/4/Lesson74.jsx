import React, { useState } from 'react'

const Lesson74 = () => {
  const [state, setState] = useState({
    users: [
      { name: 'Коля', surname: 'Иванов', age: 30, checked: true },
      { name: 'Вася', surname: 'Петров', age: 40, checked: true },
      { name: 'Петя', surname: 'Сидоров', age: 50, checked: true },
    ]
  });

  const List = ({ data, funcChange }) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked={item.checked} onChange={() => funcChange(index)} />
            {item.checked ? `${item.name} ${item.surname} ${item.age}` : `${item.name}`}
          </li>
        ))}
      </ul >
    );
  };

  const handleChange = (index) => {
    const copyStr = { ...state };
    copyStr.users[index].checked = !copyStr.users[index].checked;
    setState(copyStr);
  };

  return <div>
    <List data={state.users} funcChange={handleChange} />
  </div>
}

export default Lesson74
