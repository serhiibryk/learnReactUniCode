import React, { useState, useRef } from 'react'

const Lesson58 = () => {
  const [names, setNames] = useState(['Жопа', 'Голова', 'Бутылка']);
  let newUser = useRef(null);

  const List = ({ data }) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return <div>
    <List data={names} />
    <input type="text" ref={newUser} />
    <button onClick={() => {
      const copyNames = [...names];
      copyNames.push(newUser.current.value);
      newUser.current.value = '';
      setNames(copyNames);
    }}>ADD NAME</button>
  </div>
}

export default Lesson58
