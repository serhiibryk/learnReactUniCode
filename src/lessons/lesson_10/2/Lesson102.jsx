import React from 'react';
import './index.css';
import ComponentTest from './ComponentTest'

const Lesson102 = () => {
  const tests = [
    {
      question: 'Вопрос 1',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
      ],
      right: 3,
    },
    {
      question: 'Вопрос 2',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
      ],
      right: 1,
    },
    {
      question: 'Вопрос 3',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
      ],
      right: 4,
    },
    {
      question: 'Вопрос 4',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
      ],
      right: 3,
    },
    {
      question: 'Вопрос 5',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
      ],
      right: 3,
    },
    {
      question: 'Вопрос 6',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
      ],
      right: 3,
    },
  ];

  return (
    tests.map((item, index) =>
      <ComponentTest key={index} item={item} />
    )
  );
};

export default Lesson102
