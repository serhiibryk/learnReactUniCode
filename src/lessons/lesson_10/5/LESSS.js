import React from "react";

const flex = {
  display: 'flex',
}

const btn = {
  width: '65px',
}

const Nav = ({ currentMonth, newCurrentMonth }) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const handleClick = (event) => {
    const name = event.target.name;
    let value = currentMonth;
    if (name === "next") {
      return newCurrentMonth(value + 1)
    }
    return newCurrentMonth(value - 1);
  };

  return (
    <div style={style}>
      <button style={{ flexGrow: '1' }} name="prev" onClick={handleClick} > ← </button>
      <button style={{ flexGrow: '1' }} name="next" onClick={handleClick} > → </button>
    </div>
  );
}

const CurrentMonth = ({ onHandleClick }) => {

  const [m, setM] = React.useState(new Date().getMonth())
  const y = new Date().getFullYear();

  const firstDayOfCurrentMonth = new Date(y, m, 1).getDay();
  const lastDateOfCurrentMonth = new Date(y, m + 1, 0).getDate();
  // const lastDateOfLastMonth = m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  const ROWS = 6;
  const COLS = 7;
  let table = [];

  const handleClick = (event) => {
    const day = parseInt(event.target.dataset.value);
    const month = m;
    const year = 2019;

    onHandleClick(day, month, year);
  };

  const handleChange = (value) => {
    setM(value);
  };

  const arrayMonth = new Array(42).fill(null);
  let day = 1;

  for (let i = firstDayOfCurrentMonth; i < arrayMonth.length; i++) {
    if (i < lastDateOfCurrentMonth + firstDayOfCurrentMonth) {
      arrayMonth[i] = day;
      day++;
    }
  }

  let last = 0

  for (let i = 0; i < ROWS; i++) {
    const tr = [];
    for (let j = 0; j < COLS; j++) {
      tr[j] = <td key={j} data-value={arrayMonth[last]} onClick={handleClick}> {arrayMonth[last]} </td>;
      last++;
    }
    table.push(<tr key={i}>{tr}</tr>);
  }

  return (
    <>
      <table border="1">
        <thead >
          <tr >
            <td colSpan="7">
              {m + 1}/2019
            </td>
          </tr>
          <tr >
            <td> Вс </td>
            <td> Пн </td>
            <td> Вт </td>
            <td> Ср </td>
            <td> Чт </td>
            <td> Пт </td>
            <td> Сб </td>
          </tr>
        </thead>
        <tbody>
          {table.map(item => item)}
        </tbody>

      </table>
      <Nav currentMonth={m} newCurrentMonth={handleChange} />
    </>
  );
}

let CHECK = false;

const ToDo = ({ date, list, onHandleChange, onHandleDelete, onHandleChangeCheck, onHandleAdd, }) => {

  const [inputValue, setInputValue] = React.useState();
  const [inputCreate, setInputCreate] = React.useState();
  const [isVisible, setIsVisible] = React.useState({
    index: null,
    isVisible: CHECK,
  });

  const find = (array, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].date === value)
        return i;
    }
    return -1;
  };

  const ID = find(list, date);

  // const handleSubmit = (event) => {
  //   // debugger;
  //   if(event) {
  //     event.preventDefault();
  //     event.target.reset();
  //   }
    
  //   if (ID >= 0) {
  //     const array = [];
  //     const obj = {};
  //     obj.name = inputCreate;
  //     obj.isDone = false;
  //     array.push(obj);
  //     console.log(array, ID);
  //     console.log('reset');


  //     return onHandleAdd(array, ID);
  //   } else {

  //     const array = [];
  //     const arrayTasks = [];
  //     const obj = {};
  //     const objTasks = {};

  //     objTasks.name = inputCreate;
  //     objTasks.isDone = false;
  //     arrayTasks.push(objTasks);


  //     obj.date = date;
  //     obj.tasks = arrayTasks;
  //     array.push(obj)
  //     console.log(array);
      
  //     return onHandleAdd(array, ID);
  //   }

    
  // };

  const handleClick = (event, index) => {

    const name = event.target.name;

    if (name === 'delete') {
      const firstPart = list[ID].tasks.slice(0, index);
      const lastPart = list[ID].tasks.slice(index + 1, list.length);
      return onHandleDelete(firstPart.concat(lastPart), ID);
    };

    if (name === 'createItem') {
      if (ID >= 0) {
        const array = [];
        const obj = {};
        obj.name = inputCreate;
        obj.isDone = false;
        array.push(obj);
        console.log(array, ID);
        console.log('reset');
        event.preventDefault();
        event.target.reset();
        return onHandleAdd(array, ID);
      } else {
        
        const array = [];
        const arrayTasks = [];
        const obj = {};
        const objTasks = {};

        objTasks.name = inputCreate;
        objTasks.isDone = false;
        arrayTasks.push(objTasks);


        obj.date = date;
        obj.tasks = arrayTasks;
        array.push(obj)
        console.log(array);
        event.preventDefault();
        event.target.reset();
        return onHandleAdd(array, ID);
      }
    }

    if (name === 'edit') {
      setInputValue(list[ID].tasks[index].name);
      CHECK = !CHECK;
      setIsVisible({
        index: index,
        isVisible: CHECK,
      });

      if (inputValue !== undefined) {
        onHandleChange(inputValue, ID, index);
        setInputValue();
      }
    }
  };

  const handleChange = (event, index) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'newValueInput') {
      return setInputValue(value);
    };

    if (name === 'createItem') {
      return setInputCreate(value);
    }

    if (name === 'check') {
      const check = event.target.checked;
      onHandleChangeCheck(check, ID, index);
    };
  };

  return (
    <div >
      <div > {date === '00/00/0000' ? 'Виберите день' : date} </div>
      {ID >= 0 ?
        <ul>
          {list[ID].tasks.map((item, index) => (
            <li key={index}>
              <div style={flex}>
                {item.isDone ? <div style={{ textDecoration: 'line-through' }}> {item.name} </div> : <div>  {item.name} </div>}
                <input type="checkbox" name="check" checked={item.isDone} onChange={(event) => handleChange(event, index)} />
              </div>
              <div>
                <button name="delete" onClick={(event) => handleClick(event, index)} > DEL </button>
                <button name="edit" onClick={(event) => handleClick(event, index)} > 
                  {isVisible.index === index && isVisible.isVisible === true ? 'updata' : 'EDIT'} 
                </button>
              </div>
              {isVisible.index === index && isVisible.isVisible === true ?
                <div> <input type="text" value={inputValue} name="newValueInput" onChange={handleChange} /> </div> :
                <></>
              }
            </li>
          ))}
        </ul> :
        <div>Задач нету</div>}
      <div>
        {date === '00/00/0000' ? '' : 
          <form name="createItem" onSubmit={handleClick}>
          <input type="text" name="createItem" onChange={handleChange} />
            <input type="submit" style={btn} name="createItem" value="Создать" /> {/*onClick={handleClick}*/}
        </form>
        }
      </div>
    </div>
  );
};

export default function Task107() {

  const [date, setDate] = React.useState('00/00/0000');

  const [list, setList] = React.useState([
    { date: "1/5/2019", tasks: [
      { name: 'list11', isDone: false }, 
      { name: 'list12', isDone: false }, 
      { name: 'list13', isDone: false }, 
     { name: 'list14', isDone: false }, 
    ], },
    { date: "2/5/2019", tasks: [
      { name: 'list21', isDone: false },
      { name: 'list22', isDone: false },
      { name: 'list23', isDone: false },
      { name: 'list24', isDone: false }, 
    ], },
    { date: "3/5/2019", tasks: [
      { name: 'list31', isDone: false },
      { name: 'list32', isDone: false },
      { name: 'list33', isDone: false },
      { name: 'list34', isDone: false },
    ], },
    { date: "4/5/2019", tasks: [
      { name: 'list41', isDone: false },
      { name: 'list42', isDone: false },
      { name: 'list43', isDone: false },
      { name: 'list44', isDone: false },
    ], },
  ]);

  const handleClick = (day, month, year) => {
    const total = day + '/' + month + '/' + year;
    setDate(total);
  };

  const handleChange = (newItem, idArray, idItem) => {
    const newList = list.concat();
    newList[idArray].tasks[idItem].name = newItem;
    setList(newList);
  };
  
  const handleChangeCheck = (check, idArray, idItem) => {
    const newList = list.concat();
    newList[idArray].tasks[idItem].isDone = check;
    setList(newList);
  };

  const handleDelete = (newItem, idArray) => {
    const newList = list.concat();
    newList[idArray].tasks = newItem;
    setList(newList);
  };

  const handleAdd = (newItem, idArray) =>{
    
    if (idArray === -1) {
      const newList = list.concat();
      return setList(newList.concat(newItem));
    }
    const newList = list.concat();
    const createNewArrayItems = list[idArray].tasks.concat(newItem);
    newList[idArray].tasks = createNewArrayItems;
    setList(newList);
  };

  return (
    <>
      <CurrentMonth onHandleClick={handleClick} />
      <hr />
      <ToDo 
        date={date}
        list={list} 
        onHandleChange={handleChange} 
        onHandleChangeCheck={handleChangeCheck} 
        onHandleDelete={handleDelete}
        onHandleAdd={handleAdd} />
    </>
  );
}
