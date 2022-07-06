import React, { useState } from 'react'

const Lesson716 = () => {
  const [test, setTest] = useState([
    {
      question: 'Вопрос 1',
      answers: [
        'Ответ11',
        'Ответ12',
        'Ответ13',
        'Ответ14',
        'Ответ15',
      ],
      currentAnswer: '',
      right: 3,
    },
    {
      question: 'Вопрос 2',
      answers: [
        'Ответ21',
        'Ответ22',
        'Ответ23',
        'Ответ24',
        'Ответ25',
      ],
      currentAnswer: '',

      right: 1,
    },
    {
      question: 'Вопрос 3',
      answers: [
        'Ответ31',
        'Ответ32',
        'Ответ33',
        'Ответ34',
        'Ответ35',
      ],
      currentAnswer: '',

      right: 4,
    },
  ]);

  const Questions = ({ data, onRadioChange }) => (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.question}</p>
          {item.answers.map((answer, id) => (
            <div>
              <input
                type="radio"
                checked={answer === item.currentAnswer}
                onChange={(event) => onRadioChange(index, event)}
                value={answer}
              />
              <span
                style={{
                  color:
                    id === item.right && answer === item.currentAnswer
                      ? 'green'
                      : answer === item.currentAnswer
                        ? 'red'
                        : 'black',
                }}>
                {answer}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const handleRadioChange = (index, event) => {
    const copyTest = [...test];
    copyTest[index].currentAnswer = event.target.value;
    setTest(copyTest);
  };

  return <Questions data={test} onRadioChange={handleRadioChange} />;
}

export default Lesson716
