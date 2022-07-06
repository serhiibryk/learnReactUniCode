import React, { useState, useRef } from 'react'

const Lesson710 = () => {
  const [days, setDays] = useState({
    language: 'Rus',
    DaysOfWeek: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ]
  });

  const selectedLanguage = useRef(null);

  const DaysOfWeek = ({ data }) => {
    const selectedDaysOfWeek = useRef(null);
    return (
      <select ref={selectedDaysOfWeek}>
        {data.map((item, index) => (
          <option key={index}> {item} </option>
        ))}
        ;
      </select>
    );
  };

  const handleChange = () => {
    const copyDays = { ...days };
    if (selectedLanguage === null || selectedLanguage.current.value === 'Rus') {
      copyDays.language = 'Rus';
      copyDays.DaysOfWeek = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
      ];
    } else {
      copyDays.language = 'Eng';
      copyDays.DaysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ];
    }
    setDays(copyDays);
  };

  return <div>
    <select ref={selectedLanguage} onChange={handleChange}>
      <option>Rus</option>
      <option>Eng</option>
    </select>
    <DaysOfWeek data={days.DaysOfWeek} />
  </div>
}

export default Lesson710
