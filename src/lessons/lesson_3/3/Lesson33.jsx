import React, { useState } from 'react'

const Lesson33 = () => {
  const [user, setUser] = useState({ name: 'Иван', age: 25, show: false });

  const handleClick = () => {

    setUser({
      ...user,
      show: !user.show
    })
  }

  return <div>
    <button onClick={handleClick}>Нажми на меня</button>
    {user.show && (
      <p>Name: {user.name}, {user.age}</p>
    )}
  </div>
}

export default Lesson33
