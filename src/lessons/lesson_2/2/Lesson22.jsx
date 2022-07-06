import React from 'react'

const Lesson22 = () => {
  const showMessage = () => {
    alert('hello');
  }
  return <button onClick={showMessage}>Push me!</button>;
}

export default Lesson22
