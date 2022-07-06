import React, { useState } from "react";

const UserData = ({
  item,
  onClick,
  onChangeNumberOfWorkedDays,
  onChangeSalaryPerDay,
}) => {
  const [cellEdit, setCellEdit] = useState("");

  const handleDaysEdit = () => {
    setCellEdit("days");
  };

  const handleSalaryEdit = () => {
    setCellEdit("salary");
  };

  const handleBlur = (e) => {
    // console.log(e.target.value);
    // console.log(cellEdit);
    // console.log(item.id);
    setCellEdit('');
    if (cellEdit === 'days') {
      onChangeNumberOfWorkedDays(item.id, e);
      return;
    }
    onChangeSalaryPerDay(item.id, e);
  };

  return (
    <tr>
      <td className="td-table">{item.name}</td>

      <td className="td-table">{item.surname}</td>

      <td className="td-table">
        <div style={{ display: "inline" }} onClick={handleDaysEdit}>
          {item.numberOfWorkedDays}
        </div>
        {cellEdit === "days" && (
          <input
            initial-value={item.numberOfWorkedDays}
            type="number"
            // onBlur={(event) => onChangeNumberOfWorkedDays(item.id, event)}
            onBlur={handleBlur}
          />
        )}
      </td>

      <td className="td-table">
        <div style={{ display: "inline" }} onClick={handleSalaryEdit}>
          {item.salaryPerDay}
        </div>
        {cellEdit === "salary" && (
          <input
            initial-value={item.salaryPerDay}
            type="number"
            // onBlur={(event) => onChangeSalaryPerDay(item.id, event)}
            onBlur={handleBlur}
          />
        )}
      </td>

      <td className="td-table">
        {item.numberOfWorkedDays * item.salaryPerDay}
      </td>
    </tr>
  );
};

export default UserData;
