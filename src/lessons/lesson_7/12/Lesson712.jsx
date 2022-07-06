import React, { useState } from 'react'

const Lesson712 = () => {
  const [state, setState] = useState({
    employees: [
      { name: 'Grey', surname: 'Bryk', age: 1, salary: 5000, gender: 'male' },
      { name: 'Serhii', surname: 'Bryk', age: 24, salary: 650, gender: 'male' },
      { name: 'Maryna', surname: 'Savchuk', age: 22, salary: 850, gender: 'female' },
      { name: 'Stan', surname: 'Winter', age: 29, salary: 2200, gender: 'male' },
      { name: 'Bella', surname: 'Dolzhenko', age: 23, salary: 400, gender: 'female' },
      { name: 'Floyd', surname: 'Madry', age: 24, salary: 3500, gender: 'male' },
      { name: 'Henry', surname: 'Ostapov', age: 27, salary: 600, gender: 'male' },
      { name: 'Mark', surname: 'Vozniuk', age: 28, salary: 800, gender: 'male' },
      { name: 'Norman', surname: 'Sharov', age: 25, salary: 1000, gender: 'male' }
    ],
    newEmployee: { name: '', surname: '', age: '', salary: 'male' }
  });

  const Table = ({ data }) => (

    <table style={{ border: '1px solid' }}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid' }}>{item.name}</td>
            <td style={{ border: '1px solid' }}>{item.surname}</td>
            <td style={{ border: '1px solid' }}>{item.age}</td>
            <td style={{ border: '1px solid' }}>{item.salary}</td>
            <td style={{ border: '1px solid' }}>{item.gender}</td>
          </tr>
        ))}
        <tr>
          <td><p>Names</p></td>
          <td><p>Surnames</p></td>
          <td><p>Ages</p></td>
          <td><p>Salaries</p></td>
          <td><p>Genders</p></td>
        </tr>
      </tbody>
    </table>
  );

  const handleChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      newEmployee: {
        ...state.newEmployee,
        [name]: value,
      },
    });
  };

  const handleClick = () => {
    const copyEmployees = { ...state };

    copyEmployees.employees.push(copyEmployees.newEmployee);
    copyEmployees.newEmployee = {
      name: '',
      surname: '',
      age: '',
      salary: '',
      gender: 'male'
    };

    setState(copyEmployees);
  };

  return (<div>
    <Table data={state.employees} />

    <div >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>name:</span>
        <input
          type="text"
          value={state.newEmployee.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>surname:</span>
        <input
          value={state.newEmployee.surname}
          name="surname"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>age:</span>
        <input
          value={state.newEmployee.age}
          type="number"
          name="age"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>salary:</span>
        <input
          value={state.newEmployee.salary}
          type="number"
          name="salary"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>gender:</span>
        <select
          value={state.newEmployee.gender} name="gender" onChange={handleChange} >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    </div>
    <button
      style={{ display: 'flex', justifyContent: 'flex-start' }}
      onClick={handleClick} >Add new person</button>
  </div >
  );
}

export default Lesson712
