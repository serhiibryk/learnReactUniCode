import React, { useState } from 'react'

const Lesson34 = () => {
  const [user, setUser] = useState({ name: 'Иван', age: 25, show: false });

  const handleClick = () => {

    setUser({
      ...user,
      show: !user.show
    })
  }

  return <div>
    <button onClick={handleClick}>{user.show ? 'Скрыть' : 'Показать'}</button>
    {user.show && (
      <p>Name: {user.name}, {user.age}</p>
    )}
  </div>
}

export default Lesson34
