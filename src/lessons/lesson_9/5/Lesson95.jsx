import React, { useState } from 'react';
import TableOfUsers from '../Components/ComponentLesson91,92,93,94,95/TableOfUsers95';

const Lesson95 = () => {
  const [users, setUsers] = useState([
    { name: 'Grey', surname: 'Bryk', age: 1, href: '1.html', },
    { name: 'Serhii', surname: 'Bryk', age: 24, href: '2.html', },
    { name: 'Maryna', surname: 'Bryk', age: 22, href: '3.html', },
    { name: 'Tanya', surname: 'Bryk', age: 43, href: '4.html', },
    { name: 'Galyna', surname: 'Bryk', age: 74, href: '5.html', },
    { name: 'Diana', surname: 'Bryk', age: 14, href: '6.html', }
  ]);

  const handleDeleteClick = (index) => {
    const copy = [...users];
    copy.splice(index, 1);
    setUsers(copy);
  };



  return <div>
    <TableOfUsers data={users} handleDeleteClick={handleDeleteClick} />
  </div>
}

export default Lesson95
