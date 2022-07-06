import React, { useState } from 'react'

const Lesson54 = () => {
  // const [name, setName] = useState({ value: '', fullName: [] });

  // const handleChange = (event) => {
  //   const inputCopy = event.target.value.match(/^[a-zа-яё][a-zа-яё\s]*$/i);

  //   const filterStr = inputCopy ? inputCopy.toString().replace(/ {2,}/g, '') : '';
  //   setName({
  //     value: filterStr,
  //     fullName: filterStr.split('', 3)
  //   });

  //   return (<div>
  //     <input onChange={handleChange} value={name.value} />
  //     {name.value && <p>{name.fullName[0]}</p>}
  //     {name.value && <p>{name.fullName[1]}</p>}
  //     {name.value && <p>{name.fullName[2]}</p>}
  //   </div>
  //   );
  // }
  const [state, setState] = useState({ value: '', fullName: [] });

  return (
    <div>
      <input value={state.value} onChange={(event) => {
        const inputCopy = event.target.value.match(/^[a-zа-яё][a-zа-яё\s]*$/i);

        const filteredString = inputCopy ? inputCopy.toString().replace(/ {2,}/g, ' ') : '';
        setState({
          value: filteredString,
          fullName: filteredString.split(' ', 3)
        });
      }} />
      {state.value && <p>{state.fullName[0]}</p>}
      {state.value && <p>{state.fullName[1]}</p>}
      {state.value && <p>{state.fullName[2]}</p>}
    </div>
  );
};

export default Lesson54
