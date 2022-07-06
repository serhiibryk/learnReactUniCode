import React, { useState } from 'react'

const Lesson71 = () => {
  const [state, setState] = useState([
    { string: 'Ганьба', checked: true },
    { string: 'На вила', checked: false },
    { string: 'Вийди розбійник', checked: false }]);

  const List = ({ data, funcChange }) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked={item.checked} onChange={() => funcChange(index)} />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.string}
            </span>
          </li>
        ))}
      </ul >
    );
  };

  const handleChange = (index) => {
    const copyStr = [...state];
    copyStr[index].checked = !copyStr[index].checked;
    setState(copyStr);
  };

  return <div>
    <List data={state} funcChange={handleChange} />
  </div>
}

export default Lesson71
