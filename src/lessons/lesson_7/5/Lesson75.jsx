import React, { useState } from 'react'

const Lesson75 = () => {
  const [lines, setLines] = useState([{ string: 'Fooooof', show: false },
  { string: 'Geeeeeees', show: false },
  { string: 'Raaaaaaam', show: false },
  { string: 'Viiiiiiin', show: false }]);

  const List = ({ data, onClick, onChange }) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div style={{ display: 'inline' }} onClick={() => onClick(index)}>{item.string}</div>
            {item.show ? (
              <input initial-value={item.string} type="text" onBlur={(event) => onChange(index, event)} />)
              : null}
          </li>
        ))}
      </ul>
    );
  };

  const handleClick = (index) => {
    const copyForClick = [...lines];
    copyForClick[index].show = !copyForClick[index].show;
    setLines(copyForClick);
  };

  const handleChange = (index, event) => {
    const copyForChange = [...lines];
    if (event.target.value !== '') {
      copyForChange[index].string = event.target.value;
    }
    copyForChange[index].show = false;
    setLines(copyForChange);
  };


  return <div>
    <List data={lines} onClick={handleClick} onChange={handleChange} />
  </div>
}

export default Lesson75
