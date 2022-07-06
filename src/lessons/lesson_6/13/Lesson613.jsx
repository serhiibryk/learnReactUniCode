import React, { useState } from 'react'

const Lesson613 = () => {
  const [state, setState] = useState({
    day: [],
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    year: [1735, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    selectedDate: new Date().getDate(),
    selectedMonth: new Date().getMonth() + 1,
    selectedYear: new Date().getFullYear(),
    selectedDayOfTheWeek: new Date().getDay()
  });

  const Selects = ({ data, selectedArr, selectedValue, funcChange }) => {
    return (
      <select value={data[selectedValue]} name={selectedValue} onChange={funcChange}>
        {data[selectedArr].map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    )
  };

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: Number(value) });

  const returnDays = () => {
    const currentDate = new Date(
      state.selectedYear,
      state.selectedMonth,
      0,
    ).getDate();

    const arr = [];

    for (let i = 1; i <= currentDate; i++) {
      arr.push(i);
    }

    return arr;
  };

  const converToString = (day) => {
    const newDate = new Date(
      state.selectedYear,
      state.selectedMonth - 1,
      state.selectedDate,
    );
    const options = { weekday: 'long' };
    day = new Intl.DateTimeFormat('ru-Ru', options).format(newDate);
    return day;
  };

  return (
    <div>
      <Selects
        data={{ ...state, day: returnDays() }}
        selectedArr="day"
        selectedValue="selectedDate"
        funcChange={handleChange}
      />

      <Selects
        data={state}
        selectedArr="month"
        selectedValue="selectedMonth"
        funcChange={handleChange}
      />

      <Selects
        data={state}
        selectedArr="year"
        selectedValue="selectedYear"
        funcChange={handleChange}
      />

      <p>{converToString(state.selectedDayOfTheWeek)}</p>
    </div>
  );
}

export default Lesson613
