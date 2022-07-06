import React, { useState } from 'react'

const Lesson24 = () => {
  const [person, setPerson] = useState({ name: 'Иван', age: 25 });


  const handleClick = () => {
    setPerson({
      name: 'Kolia',
      age: 30
    })
  }

  return <div>
    <button onClick={handleClick}>Change</button>
    {person.name}
    {person.age}
  </div>
}

export default Lesson24
