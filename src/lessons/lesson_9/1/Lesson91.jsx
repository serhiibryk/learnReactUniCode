import React, { useState } from 'react';
import TableOfUsers from '../Components/ComponentLesson91,92,93,94,95/TableOfUsers';

const Lesson91 = () => {
  const [users, setUsers] = useState([
    { name: 'Grey', surname: 'Bryk', age: 1 },
    { name: 'Serhii', surname: 'Bryk', age: 24 },
    { name: 'Maryna', surname: 'Bryk', age: 22 },
    { name: 'Tanya', surname: 'Bryk', age: 43 },
    { name: 'Galyna', surname: 'Bryk', age: 74 },
    { name: 'Diana', surname: 'Bryk', age: 14 }
  ]);

  return <div>
    <TableOfUsers data={users} />
  </div>
}

export default Lesson91
