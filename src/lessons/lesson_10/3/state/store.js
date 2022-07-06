let store = {
  questions: [
    {
      questionNumber: 'Question 1',
      question: ' Вопрос 1',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'yes',
      value2: 'no',
      value3: 'no',
      value4: 'no',
      prev: '/',
      path: '/1',
      link: '/2',
      next: 'NEXT',
      back: 'BACK',
    },
    {
      questionNumber: 'Question 2',
      question: ' Вопрос 2',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'no',
      value2: 'yes',
      value3: 'no',
      value4: 'no',
      prev: '/1',
      path: '/2',
      link: '/3',
      next: 'NEXT',
    },
    {
      questionNumber: 'Question 3',
      question: ' Вопрос 3',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'no',
      value2: 'no',
      value3: 'yes',
      value4: 'no',
      prev: '/2',
      path: '/3',
      link: '/4',
      next: 'NEXT',
    },
    {
      questionNumber: 'Question 4',
      question: ' Вопрос 4',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'no',
      value2: 'no',
      value3: 'no',
      value4: 'yes',
      prev: '/3',
      path: '/4',
      link: '/5',
      next: 'NEXT',
    },
    {
      questionNumber: 'Question 5',
      question: ' Вопрос 5',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'yes',
      value2: 'no',
      value3: 'no',
      value4: 'no',
      prev: '/4',
      path: '/5',
      link: '/6',
      next: 'NEXT',
    },
    {
      questionNumber: 'Question 6',
      question: ' Вопрос 6',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'no',
      value2: 'yes',
      value3: 'no',
      value4: 'no',
      prev: '/5',
      path: '/6',
      link: '/7',
      next: 'NEXT',
    },
    {
      questionNumber: 'Question 7',
      question: ' Вопрос 7',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'no',
      value2: 'no',
      value3: 'yes',
      value4: 'no',
      prev: '/6',
      path: '/7',
      link: '/8',
      next: 'NEXT',
    },
    {
      questionNumber: 'Question 8',
      question: ' Вопрос 8',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      value1: 'no',
      value2: 'no',
      value3: 'no',
      value4: 'yes',
      prev: '/7',
      path: '/8',
      link: '/result',
      next: 'FINISH',
    },
  ],
  prev: '/result',
  path: '/answers',
  link: '/',
  next: 'FINISH',
  allAnswers: '',
};

export default store
