import React, { useState } from 'react'

const Lesson610 = () => {

  const [paragraphs, setParagraphs] = useState({
    paragraph: ['Пісюнці', 'Зажопье', 'Жопа', 'Жмеринка', 'Хацапетовка', 'Волосянка', 'Драбів', 'Обухів', 'Чмирівка'],
    currentParagraph: 'Пісюнці'
  });

  const Select = ({ values, changeFunc }) => {
    return (
      <select value={paragraphs.currentParagraph} onChange={changeFunc}>
        {paragraphs.paragraph.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    );
  };


  return <div>
    <p>{paragraphs.currentParagraph}</p>
    <p>{paragraphs.currentParagraph}</p>
    <p>{paragraphs.currentParagraph}</p>
    <p>{paragraphs.currentParagraph}</p>
    <p>{paragraphs.currentParagraph}</p>
    <p>{paragraphs.currentParagraph}</p>
    <p>{paragraphs.currentParagraph}</p>
    <Select option={paragraphs} values={paragraphs} changeFunc={(event) => {
      setParagraphs({ ...paragraphs, currentParagraph: event.target.value })
    }}
    />
  </div >
}
export default Lesson610
