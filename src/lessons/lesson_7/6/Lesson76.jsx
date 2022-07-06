import React, { useState } from 'react'

const Lesson76 = () => {
  const [state, setState] = useState([
    { name: 'Коля', age: 30, show: false },
    { name: 'Вася', age: 40, show: false },
    { name: 'Петя', age: 50, show: false },
  ]);

  const Table = ({ data, onClick, onChange }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}
                <button onClick={() => onClick(index)}>Change</button>
                {item.show ? (
                  <input initial-value={item.age} type="number" name="age" onBlur={(event) => onChange(event, index)} />)
                  : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleClick = (index) => {
    const copyForClick = [...state];
    copyForClick[index].show = true;
    setState(copyForClick);
  };

  const handleChange = ({ target: { value, name } }, index: number) => {
    const copyForChange = [...state];
    if (value !== '') {
      copyForChange[index][name] = value;
    }
    copyForChange[index].show = false;
    setState(copyForChange);
  };

  return <div>
    <Table data={state} onClick={handleClick} onChange={handleChange} />
  </div>
}

export default Lesson76
