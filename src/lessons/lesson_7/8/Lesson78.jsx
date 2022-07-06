import React, { useState, useRef } from 'react'

const Lesson78 = () => {
  const [notes, setNotes] = useState([
    { text: 'Это ваша заметка, запишите сюда информацию с помощью кнопки - РЕДАКТИРОВАТЬ', show: false, time: new Date() },
    { text: 'Это ваша заметка, запишите сюда информацию с помощью кнопки - РЕДАКТИРОВАТЬ', show: false, time: new Date() },
    { text: 'Это ваша заметка, запишите сюда информацию с помощью кнопки - РЕДАКТИРОВАТЬ', show: false, time: new Date() }
  ]);

  const NotesList = ({ data, funcEdit, funcDelete }) => {
    const editText = useRef(null);
    return (
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h3 style={{ color: 'grey' }}>Заметка № {index + 1}</h3>
            <span>Время создания заметки:{item.time.toLocaleString()}</span>
            <hr />
            <p>{item.text}</p>
            {item.show ? (
              <input type="text" initial-value={item.text} ref={editText} />)
              : null}
            <button onClick={() => funcEdit(index, item.show ? editText.current.value : null)} >РЕДАКТИРОВАТЬ</button>
            <button onClick={() => funcDelete(index)} style={{ background: 'grey' }}
            >УДАЛИТЬ</button>
            <hr style={{ border: '2px solid grey' }} />
          </div>
        ))}
      </div>
    )
  };
  const newNote = useRef(null);

  const funcAddNote = () => {
    const copyNote = [...notes];
    copyNote.push({ text: newNote.current.value, show: false, time: new Date() });
    newNote.current.value = '';
    setNotes(copyNote);
  };

  const handleEditClick = (index, value) => {
    const copyNote = [...notes];
    copyNote[index].show = !copyNote[index].show;
    value ? (copyNote[index].text = value) : (value = copyNote[index].text);
    setNotes(copyNote);
  };

  const handleDeleteClick = (index) => {
    const copyNote = [...notes];
    copyNote.splice(index, 1);
    setNotes(copyNote);
  };

  return <div>
    <NotesList data={notes} funcDelete={handleDeleteClick} funcEdit={handleEditClick} />
    <button onClick={funcAddNote} >СОЗДАТЬ НОВУЮ ЗАМЕТКУ</button>
    <textarea ref={newNote} />
  </div>
}

export default Lesson78
