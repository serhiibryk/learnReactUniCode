import React from 'react';
import { useState, useRef } from 'react';
import List from '../Components/ComponentsLesson106/List';
import todoData from './todoData';
import '../6/todoStyle.css';


const Lesson106 = () => {
  const [list, setList] = useState(todoData);
  const newList = useRef(null);

  const handleDeleteList = (index) => {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  const handleEditList = (index, value) => {
    const copyList = [...list];
    copyList[index].show = !copyList[index].show;
    value ? (copyList[index].description = value) : (value = copyList[index].description);
    setList(copyList);
  };

  const funcAddTask = () => {
    const copyList = [...list];
    copyList.push({ description: newList.current.value, show: false, time: new Date() });
    newList.current.value = '';
    setList(copyList);
  };

  const handleChange = (index) => {
    const copyList = [...list];
    copyList[index].compleated = !copyList[index].compleated;
    setList(copyList);
  };

  return (
    <div className="todo-Container">
      <div>
        <p className="todo-List-Title">TO DO LIST</p>
        <hr style={{ border: '2px solid grey' }} />
        <List data={list} funcEdit={handleEditList} funcDelete={handleDeleteList} onChange={handleChange} />

      </div>
      <div className="todo-Add-Bar">
        <button className="add-Button" onClick={funcAddTask} >СОЗДАТЬ НОВУЮ ЗАДАЧУ</button>
        <input className="add-Input" ref={newList} placeholder="Ввведите цель" />
      </div>
    </div>
  );
}

export default Lesson106
