import React, { useState } from 'react'

const Lesson715 = () => {
  const [currencies, setCurrencies] = useState({
    fromCurrency: [
      { key: 'USD', name: 'USD' },
      { key: 'EUR', name: 'EUR' },
      { key: 'UAN', name: 'UAN' }
    ],
    coefficient: { EUR: 35, UAH: 1, USD: 29 },
    currentFromCurrecy: 'USD',
    currentToCurrency: 'EUR',
    currentInputValue: '',
    convertedValue: null
  });

  const Select = ({ data, name, funcChange }) => {
    return (
      <select value={data[name]} name={name} onChange={funcChange}>
        {data.fromCurrency.map((item, index) => (
          <option key={index} value={item.key}>
            {item.name}
          </option>
        ))}
      </select>
    )
  };

  const handleChange = ({ target: { value, name } }) => {
    setCurrencies({ ...currencies, [name]: value });
  };

  const handleConvert = () => {
    const copyData = { ...currencies };

    if (copyData.currentFromCurrecy !== 'UAN') {
      copyData.convertedValue = Number(copyData.currentInputValue) * copyData.coefficient[copyData.currentFromCurrecy];
      copyData.convertedValue = Math.ceil(
        (copyData.convertedValue / currencies.coefficient[copyData.currentToCurrency]) * 100,
      ) / 100;
    } else {
      copyData.convertedValue = Math.ceil(
        (Number(copyData.currentInputValue) / currencies.coefficient[copyData.currentToCurrency]) * 100,
      ) / 100;
    }

    setCurrencies(copyData);
  };

  return <div>
    <br />
    <input
      type="text"
      value={currencies.currentInputValue}
      name="currentInputValue"
      onChange={handleChange} />
    <div>
      <br />
      <span> From: </span>
      <Select data={currencies} name="currentFromCurrency" funcChange={handleChange} />
    </div>
    <div>
      <br />
      <span> To: </span>
      <Select data={currencies} name="currentToCurrency" funcChange={handleChange} />
    </div>
    <div>
      <br />
      <button onClick={handleConvert}>Convert</button>
      <p>Result: {currencies.convertedValue}</p>
      <hr />
    </div>
  </div>
}

export default Lesson715
