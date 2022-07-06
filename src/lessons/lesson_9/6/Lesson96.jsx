import React, { useState, useRef } from 'react';
import ListOfStrings from '../Components/ComponentLesson96/ListOfStrings';

const Lesson96 = () => {

  const [strings, setStrings] = useState([{ string: 'Fooooof', show: false },
  { string: 'Geeeeeees', show: false },
  { string: 'Raaaaaaam', show: false },
  { string: 'Viiiiiiin', show: false }]);

  const editText = useRef(null);

  const handleEditText = (index, value) => {
    const copy = [...strings];
    copy[index].show = !copy[index].show;
    value ? (copy[index].string = value) : (value = copy[index].string);

    setStrings(copy);
  };

  const onChange = (index, event) => {
    const copyForChange = [...strings];
    if (event.target.value !== '') {
      copyForChange[index].string = event.target.value;
    }
    copyForChange[index].show = false;
    setStrings(copyForChange);
  };

  return <div>
    <ListOfStrings data={strings} funcEditText={handleEditText} editText={editText} onChange={onChange} />
  </div>
}

export default Lesson96
