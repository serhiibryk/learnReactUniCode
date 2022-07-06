import React, { useState } from 'react'
import TableUsers from './TableUsers'

export const Lesson81 = () => {
  const [users, setUsers] = useState([
    { name: 'Grey', surname: 'Bryk', age: 1 },
    { name: 'Serhii', surname: 'Bryk', age: 24 },
    { name: 'Maryna', surname: 'Savchuk', age: 22 }
  ]);








  return <div>
    <TableUsers data={users} />
  </div>
}

export default Lesson81
