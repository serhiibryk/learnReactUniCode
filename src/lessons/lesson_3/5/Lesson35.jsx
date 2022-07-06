import React from 'react'

const Lesson35 = () => {

  const namesArray = ['Коля', 'Вася', 'Петя'];

  return (
    <ul>
      {namesArray.map((name, index) =>
        <li key={index}>{name}</li>)}
    </ul>
  )
}

export default Lesson35
