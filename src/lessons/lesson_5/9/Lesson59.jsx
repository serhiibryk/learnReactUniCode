import React, { useState, useRef } from 'react'

const Lesson59 = () => {
  const [names, setNames] = useState(['Жопа', 'Голова', 'Бутылка']);
  let newUser = useRef(null);

  const List = ({ data, removeFunc }) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFunc(index)}>DELETE NAME</button>
          </li>
        ))}
      </ul>
    );
  };

  const removeElement = (index) => {
    const copyNames = [...names];
    copyNames.splice(index, 1);
    setNames(copyNames);
  };

  return <div>
    <List data={names} removeFunc={removeElement} />
    <input type="text" ref={newUser} />
    <button onClick={() => {
      const copyNames = [...names];
      copyNames.push(newUser.current.value);
      newUser.current.value = '';
      setNames(copyNames);
    }}>ADD NAME</button>
  </div>
}

export default Lesson59
