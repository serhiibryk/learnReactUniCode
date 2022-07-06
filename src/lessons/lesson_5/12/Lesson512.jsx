import React, { useState } from 'react'

const Lesson512 = () => {
  const [items, setItems] = useState({
    users: [
      { name: 'Коля', age: '30' },
      { name: 'Вася', age: '40' },
      { name: 'Петя', age: '50' },
    ],
    newUser: { name: '', age: '' },
  });

  const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleNewName = (event) => {
    setItems({ ...items, newUser: { ...items.newUser, name: event.target.value } });
  };

  const handleNewAge = (event) => {
    setItems({ ...items, newUser: { ...items.newUser, age: event.target.value } });
  };

  const addNewUser = () => {
    const copyUser = { ...items };

    if (copyUser.newUser.name !== '' && copyUser.newUser.age !== '') {
      copyUser.users.push({ name: copyUser.newUser.name, age: copyUser.newUser.age });
      copyUser.newUser = { name: '', age: '' };
    }

    setItems(copyUser);
  };

  return <div>
    <Table data={items.users} />
    <input type="text" onChange={handleNewName} value={items.newUser.name} placeholder="Ім'я" />
    <input type="number" onChange={handleNewAge} value={items.newUser.age} placeholder="Вік" />
    <button onClick={addNewUser}>Add user</button>
  </div >

}



export default Lesson512
