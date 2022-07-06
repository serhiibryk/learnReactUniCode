import React, { useState } from 'react'



export const TableUsers = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers
