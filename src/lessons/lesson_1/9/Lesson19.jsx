import React from 'react'

const Lesson19 = () => {

  const arr = ['a', 'b', 'c', 'd', 'e'];
  const li = arr.map((item, index) =>
    <li key={index}>{item}</li>);
  return <ul>
    <li>{li}</li>
  </ul>

}

export default Lesson19
