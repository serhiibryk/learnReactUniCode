import React, { useState } from 'react'

const Lesson77 = () => {
  const [trips, setTrips] = useState({
    tour: ['Черкаси-Київ', 'Черкаси-Львів', 'Черкаси-Вінниця', 'Черкаси-Харків'],
    currentValue: 'Черкаси - Київ'
  });

  const List = ({ data, onChange }) => {
    return (
      <ul>
        {data.tour.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <input type="radio"
              checked={item === data.currentValue}
              onChange={(event) => onChange({ ...trips, currentValue: event.target.value })}
              value={item} />
          </li>
        ))}
      </ul>
    );
  };

  // const handleChange = (index) => {
  //   const copy = [...trips];
  //   copy[index].checked = !copy[index].checked;
  //   setTrips(copy);
  // };

  return <div>
    <List data={trips} onChange={setTrips} />
    <p>{trips.currentValue}</p>
  </div>
}

export default Lesson77
