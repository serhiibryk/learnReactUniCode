import React, { useState, useRef } from 'react'

const Lesson511 = () => {
  const [numbers, setNumbers] = useState(['Жопа', 'Голова', 'Бутылка', 'Жопа', 'Голова', 'Бутылка', 'Жопа', 'Голова', 'Бутылка']);
  let newValue = useRef(null);

  const List = ({ data }) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  };


  return <div>
    <List data={numbers} />
    <input type="number" ref={newValue} />
    <button onClick={() => {
      const copyNumbers = [...numbers];
      copyNumbers.splice(Number((newValue.current.value), 1));
      newValue.current.value = '';
      setNumbers(copyNumbers);
    }}>Remove by index</button>
  </div>
}

export default Lesson511
