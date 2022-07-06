import React, { useState } from 'react'

const Lesson73 = () => {
  const [lines, setLines] = useState([
    { string: 'tttttttttttttttttt', checked: true },
    { string: 'yyyyyyyyyyyyyyyyyy', checked: true },
    { string: 'qqqqqqqqqqqqqqqqqq', checked: true },
    { string: 'xxxxxxxxxxxxxxxxxx', checked: true }
  ]);

  // const List = (data, funcChange) => {
  //   return (
  //     <ul>
  //       {data.map((item, index) => (
  //         <li key={index}>
  //           <input type="checkbox" checked={item.checked} onChange={() => funcChange(index)} />
  //           {item.string}
  //         </li>
  //       ))}
  //     </ul>);
  // };

  const funcChange = (index) => {
    const copy = [...lines];
    copy[index].checked = !copy[index].checked;
    setLines(copy);
  };

  return <div>
    {/* <List data={lines} funcChange={handleChange} /> */}
    {lines.map((item, index) => (
      <div key={index}>
        <input type="checkbox" checked={item.checked} onChange={() => funcChange(index)} />
        <p>{item.checked ? item.string : null}</p>
      </div>
    ))}
  </div>
}

export default Lesson73
