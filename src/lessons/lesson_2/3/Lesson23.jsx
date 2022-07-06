import React from 'react'

const Lesson23 = () => {
  const person = { name: 'Иван', age: 25 };
  const showName = () => {
    alert(person.name);
  }

  return <button kind="primary" onClick={() => alert(person.name)}>Push me!</button>
}

export default Lesson23
