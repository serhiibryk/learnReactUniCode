import React, { useState } from "react";
import "./index.css";
import UserData from "./UserData";

const Lesson101 = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: "Grey",
      surname: "Smith",
      numberOfWorkedDays: 10,
      salaryPerDay: 100,
    },
    {
      id: 2,
      name: "Serhii",
      surname: "Bryk",
      numberOfWorkedDays: 21,
      salaryPerDay: 200,
    },
    {
      id: 3,
      name: "Marina",
      surname: "Savchuk",
      numberOfWorkedDays: 22,
      salaryPerDay: 80,
    },
    {
      id: 4,
      name: "Elena",
      surname: "Vosniak",
      numberOfWorkedDays: 15,
      salaryPerDay: 40,
    },
    {
      id: 5,
      name: "Diana",
      surname: "Trymak",
      numberOfWorkedDays: 20,
      salaryPerDay: 38,
    },
    {
      id: 6,
      name: "Ulia",
      surname: "Chesnokova",
      numberOfWorkedDays: 24,
      salaryPerDay: 23,
    },
    {
      id: 7,
      name: "Maksym",
      surname: "Chobotar",
      numberOfWorkedDays: 20,
      salaryPerDay: 175,
    },
    {
      id: 8,
      name: "Vasyl",
      surname: "Gorodniuk",
      numberOfWorkedDays: 18,
      salaryPerDay: 50,
    },
    {
      id: 9,
      name: "Volodymyr",
      surname: "Shapoval",
      numberOfWorkedDays: 21,
      salaryPerDay: 70,
    },
    {
      id: 10,
      name: "Alina",
      surname: "Davydenko",
      numberOfWorkedDays: 23,
      salaryPerDay: 20,
    },
  ]);

  const TableOfWorkers = ({
    data,
    onClick,
    onChangeNumberOfWorkedDays,
    onChangeSalaryPerDay,
  }) => {
    return (
      <table className="main-table">
        <thead className="thead-table">
          <tr className="tr-table">
            <td className="td-table">Ім'я</td>

            <td className="td-table">Прізвище</td>

            <td className="td-table">Кількість відроблених днів за місяць</td>

            <td className="td-table">Ставка за день</td>

            <td className="td-table">Заробітна плата</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <UserData
              item={item}
              key={item.id}
              onClick={onClick}
              onChangeNumberOfWorkedDays={onChangeNumberOfWorkedDays}
              onChangeSalaryPerDay={onChangeSalaryPerDay}
            />
          ))}
        </tbody>
      </table>
    );
  };

  const handleSumm = () => {
    const copy = [...workers];
    return copy.reduce((prev, current) => {
      const summ = current.numberOfWorkedDays * current.salaryPerDay;
      return prev + summ;
    }, 0);
  };

  const handleClick = (index) => {
    const copyForClick = [...workers];
    copyForClick[index].show = !copyForClick[index].show;
    setWorkers(copyForClick);
  };

  const handleEditChangeNumberOfWorkedDays = (id, event) => {
    const copyForChange = [...workers];
    const user = copyForChange.find((el) => el.id === id);
    user.numberOfWorkedDays = event.target.value;
    setWorkers(copyForChange);
    // if (event.target.value !== "") {
    //   copyForChange[index].numberOfWorkedDays = event.target.value;
    // }
    // copyForChange[index].show = false;
    // setWorkers(copyForChange);
  };

  const handleEditSalaryPerDay = (id, event) => {
    const copyForChange = [...workers];
    const user = copyForChange.find((el) => el.id === id);
    user.salaryPerDay = event.target.value;
    setWorkers(copyForChange);
    // if (event.target.value !== "") {
    //   copyForChange[index].salaryPerDay = event.target.value;
    // }
    // copyForChange[index].show = false;
    // setWorkers(copyForChange);
  };

  return (
    <div>
      <TableOfWorkers
        data={workers}
        onClick={handleClick}
        onChangeNumberOfWorkedDays={handleEditChangeNumberOfWorkedDays}
        onChangeSalaryPerDay={handleEditSalaryPerDay}
      />
      <p className="summ-of-salaries">
        Сумма зарплат робітників - {handleSumm()}
      </p>
    </div>
  );
};

export default Lesson101;
