import React, { useState } from 'react'

const Lesson713 = () => {
  const [employees, setEmployees] = useState([
    { name: 'Grey', surname: 'Bryk', age: 1, salary: 5000 },
    { name: 'Drake', surname: 'Bryk', age: 29, salary: 5000 },
    { name: 'Markus', surname: 'Bryk', age: 30, salary: 5000 },
    { name: 'Alex', surname: 'Bryk', age: 23, salary: 5000 },
    { name: 'Norman', surname: 'Bryk', age: 25, salary: 5000 },
    { name: 'Henry', surname: 'Bryk', age: 27, salary: 5000 },
    { name: 'Dean', surname: 'Bryk', age: 28, salary: 5000 },
    { name: 'Floyd', surname: 'Bryk', age: 24, salary: 5000 },
    { name: 'Lloyd', surname: 'Bryk', age: 23, salary: 5000 },
    { name: 'Ben', surname: 'Bryk', age: 27, salary: 5000 },
    { name: 'Ostin', surname: 'Bryk', age: 23, salary: 5000 },
    { name: 'Frank', surname: 'Bryk', age: 24, salary: 5000 },
    { name: 'Luise', surname: 'Bryk', age: 20, salary: 5000 },
    { name: 'Tom', surname: 'Bryk', age: 23, salary: 5000 },
    { name: 'Bill', surname: 'Bryk', age: 25, salary: 5000 },
    { name: 'Duncan', surname: 'Bryk', age: 32, salary: 5000 },
    { name: 'Maks', surname: 'Bryk', age: 25, salary: 5000 },
    { name: 'Dan', surname: 'Bryk', age: 33, salary: 5000 },
    { name: 'Denis', surname: 'Bryk', age: 29, salary: 5000 },
    { name: 'Kevin', surname: 'Bryk', age: 24, salary: 5000 },
    { name: 'Moris', surname: 'Bryk', age: 21, salary: 5000 },
    { name: 'Tim', surname: 'Bryk', age: 20, salary: 5000 },
    { name: 'Jim', surname: 'Bryk', age: 19, salary: 5000 },
    { name: 'Jake', surname: 'Bryk', age: 28, salary: 5000 },
    { name: 'Grant', surname: 'Bryk', age: 35, salary: 5000 },
    { name: 'Talor', surname: 'Bryk', age: 25, salary: 5000 },
    { name: 'Fill', surname: 'Bryk', age: 22, salary: 5000 },
  ]);

  const Table = ({ data }) => (
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const handlePrevClick = () => {

  };

  const handleNextClick = () => {

  };

  const handleAmountChange = () => {

  };

  return <div>
    <Table data={employees} />

    <button onClick={handlePrevClick}>Prev</button>
    <button onClick={handleNextClick}>Next</button>
    <select onChange={handleAmountChange}>
      <option value="5"></option>
      <option value="10"></option>
      <option value="20"></option>
    </select>
  </div>
}

export default Lesson713
