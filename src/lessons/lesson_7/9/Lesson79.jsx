import React, { useState } from 'react'

const Lesson79 = () => {
  const [workers, setWorkers] = useState([
    { name: '1', surname: '5', salary: 2000 },
    { name: '6', surname: '4', salary: 4000 },
    { name: '3', surname: '1', salary: 2000 },
    { name: '5', surname: '6', salary: 3000 },
    { name: '4', surname: '2', salary: 1050 },
    { name: '2', surname: '3', salary: 1000 }
  ]);

  const Table = ({ data, funcSort }) => {
    return (
      <table style={{ border: '1px solid' }}>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid' }}>{item.name}</td>
              <td style={{ border: '1px solid' }}>{item.surname}</td>
              <td style={{ border: '1px solid' }}>{item.salary}</td>
            </tr>
          ))}
          <tr>
            <td style={{ border: '1px solid' }}>
              <p>Names</p>
              <button onClick={() => funcSort('name')}>Sort by</button>
            </td>
            <td style={{ border: '1px solid' }}>
              <p>Surnames</p>
              <button onClick={() => funcSort('surname')}>Sort by</button>
            </td>
            <td style={{ border: '1px solid' }}>
              <p>Salaries</p>
              <button onClick={() => funcSort('salary')}>Sort by</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const handleSortClick = (name) => {
    const copyData = [...workers];
    copyData.sort((a, b) => (a[name] > b[name] ? 1 : -1));
    setWorkers(copyData);
  };

  return <div>
    <Table data={workers} funcSort={handleSortClick} />
  </div>
}

export default Lesson79
