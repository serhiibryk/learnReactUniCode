import React from 'react'



const ListOfStrings = ({ data, funcEditText, editText, onChange }) => {
  return (
    <div>
      {data.map((item, index) => (
        <ul key={index}>
          <li>
            {item.string}
            {item.show ? (
              <input type="text" initial-value={item.string} ref={editText} onBlur={(event) => onChange(index, event)} />)
              : null}
            {item.show ? null : (
              <button onClick={() => funcEditText(index, item.show ? editText.current.value : null)} >РЕДАКТИРОВАТЬ</button>)
            }
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListOfStrings
