import React, { useState } from 'react'

const Lesson56 = () => {
  const [numbers, setNumbers] = useState({ firstNumber: '', secondNumber: '', summ: '' });

  const handleChange = ({ target: { name, value } }) => {
    setNumbers({
      ...numbers,
      [name]: value
    });
  };




  return <div>
    <input type="number" name="firstNumber" value={numbers.firstNumber} onChange={handleChange} />
    <input type="number" name="secondNumber" value={numbers.secondNumber} onChange={handleChange} />
    <button onClick={() => {
      const copy = { ...numbers };
      copy.summ = String(Number(copy.firstNumber) + Number(copy.secondNumber));
      copy.firstNumber = '';
      copy.secondNumber = '';
      setNumbers(copy);
    }}>PLUS</button>
    <p>{numbers.summ}</p>
  </div>
}

export default Lesson56
