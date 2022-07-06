import React from 'react'

const Lesson41 = () => {
  const namesArray = ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'];

  return <ul>
    {namesArray.map((name, index) =>
      <li key={index}>{name}</li>)}
  </ul>
}

export default Lesson41
