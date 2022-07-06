import React from 'react'

const Lesson36 = () => {

  const namesArray = ['Коля', 'Вася', 'Петя'];
  // const listItems = namesArray.map((name, index) =>
  //   <li key={index}>{name} - {index}</li>
  // );

  return (
    <ul>
      {namesArray.map((name, index) =>
        <li key={index}>{name} - {index}</li>}
    </ul>
  )
}

export default Lesson36
