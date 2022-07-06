import React, { useState } from 'react'

const Lesson72 = () => {
  const [workers, setWorkers] = useState({
    employees: [
      { name: 'Serioga', surname: 'Bryk', salary: 800, checked: true },
      { name: 'Grigory', surname: 'Pipka', salary: 1000, checked: true },
      { name: 'Valera', surname: 'Groznyi', salary: 2000, checked: true },
      { name: 'Ludmila', surname: 'Voznik', salary: 500, checked: true }],
    sumSalaries: 4300
  });

  const Table = ({ data, funcSumm }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr >
              <td width="40%">{item.name}</td>
              <td width="20%">{item.surname}</td>
              <td width="40%">{item.salary}</td>
              <td><input type="checkbox" key={index} checked={item.checked} onChange={() => funcSumm(index)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const sumSal = (index) => {
    const copy = { ...workers };
    copy.employees[index].checked = !copy.employees[index].checked;
    copy.employees[index].checked === true
      ? (copy.sumSalaries += copy.employees[index].salary)
      : (copy.sumSalaries -= copy.employees[index].salary);
    setWorkers(copy);
  };

  return <div>
    <Table data={workers.employees} funcSumm={sumSal} />
    <p>{workers.sumSalaries}</p>
  </div>
}

export default Lesson72
