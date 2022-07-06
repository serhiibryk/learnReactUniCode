import React from 'react'



const TableOfUsers = ({ data, handleDeleteClick }) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <td>ID</td>

          <td>NAME</td>

          <td>SURNAME</td>

          <td>AGE</td>

          <td>LINK</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>

            <td>{item.name}</td>

            <td>{item.surname}</td>

            <td>{item.age}</td>

            <td onClick={() => handleDeleteClick(index)}><a>{item.href}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );



};

export default TableOfUsers
