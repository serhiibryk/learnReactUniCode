import React, { useState } from 'react'

const Lesson68 = () => {
  const [colors, setColors] = useState({
    colorValues: ['#000000', '#ff0000', '#ff00ff', '#F8EE67', '#2FEBF8', '#2C02FC', '#7734F3', '#51F334'],
    selectValue: '#000000',
  });

  const Select = ({ colors, funcSelect }) => {
    return (
      <select value={colors.selectValue} onChange={funcSelect}>
        {colors.colorValues.map((item, index) => (
          <option style={{ backgroundColor: item }} key={index}>
            {item}
          </option>
        ))}
      </select>
    )
  };

  const handleSelect = (e) => {
    setColors({ ...colors, selectValue: e.target.value });
  };

  return (<div>
    <Select colors={colors} funcSelect={handleSelect} />
    <h1 style={{ color: colors.selectValue }}>3===э </h1>
  </div >);

}

export default Lesson68
