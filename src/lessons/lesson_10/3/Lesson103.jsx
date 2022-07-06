import React, { useState } from "react";
// import { Question } from "../Components/ComponentsLesson103,104/Question";
// import { Result } from "../Components/ComponentsLesson103,104/Result";
// import { Start } from "../Components/ComponentsLesson103,104/Start";
import store from "./state/store";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Lesson103 = () => {

  let [answer, setAnswer] = useState(0);
  let [flag, setFlag] = useState(0);
  let [result, setResult] = useState(0);
  let [allAnswers, setAllAnswers] = useState([
    {
      question: ' Вопрос 1',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 2',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 3',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 4',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 5',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 6',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 7',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    },
    {
      question: ' Вопрос 8',
      var1: 'some answer 1',
      var2: 'some answer 2',
      var3: 'some answer 3',
      var4: 'some answer 4',
      answer: '',
    }

  ]);
  // const [newStore, setNewStore] = useState(0);

  const getResult = () => {
    setAnswer(0);
    setFlag(0);
    setResult(0);
  };

  const getReset = () => {
    setAnswer(0);
    setFlag(0);
    setResult(result + answer);
  };

  const getAnswer = (event) => {
    if (event.target.value === 'yes') {
      if (flag === 0) {
        setAnswer(answer + 1);
        setFlag(flag + 1);
      } else {
        setAnswer(answer);
      }
    } else {
      if (flag !== 0) {
        setAnswer(answer - 1);
        setFlag(flag - 1);
      } else {
        setAnswer(answer);
      }
    }
  };



  let questionsArray = store.questions.map((elem, index) => (
    <Route
      key={index}
      exact
      path={elem.path}
      element={
        <div className="test-wrapper">
          <h2 className="question-title">
            <span>{elem.questionNumber}</span>
            {elem.question}
          </h2>
          <div className="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              className="question-input"
              type="radio"
              id="q1"
              name="q1"
              value={elem.value1}
            />
            <label htmlFor="q1">{elem.var1}</label>
          </div>

          <div className="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              className="question-input"
              type="radio"
              id="q2"
              name="q1"
              value={elem.value2}
            />
            <label htmlFor="q2">{elem.var2}</label>
          </div>

          <div className="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              className="question-input"
              type="radio"
              id="q3"
              name="q1"
              value={elem.value3}
            />
            <label htmlFor="q3">{elem.var3}</label>
          </div>

          <div className="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              className="question-input"
              type="radio"
              id="q4"
              name="q1"
              value={elem.value4}
            />
            <label htmlFor="q4">{elem.var4}</label>
          </div>
          <div className="question-button">
            <NavLink to={elem.link}>
              <input
                onClick={getReset}
                className="question-button-next"
                type="button"
                value={elem.next}
              />

            </NavLink>
            <NavLink to={elem.prev}>
              <input
                // onClick={getReset}
                className="question-button-back"
                type="button"
                value={elem.back}
              />
            </NavLink>
          </div>
        </div>
      }
    ></Route>
  ));



  let AllAnswersList = ({ data }) => {
    return (
      <div>
        {data.map((item, index, onChangeAnswers) => (
          <ul key={index}>
            <li>
              {item.question}
              <p> {item.var1}</p>

              <p> {item.var2}</p>

              <p> {item.var3}</p>

              <p> {item.var4}</p>
            </li>
            <p>ваш ответ:{item.answer}</p>
          </ul>
        ))
        }
      </div >
    )
  }

  // const onChangeAnswers = (event, index) => {
  //   const copyStore = { ...store };
  //   const copyAllAnswers = [...allAnswers];
  //   if (event.target.value === 'yes') {
  //     copyAllAnswers[index].answer = event.target.value;
  //   } else {
  //     copyAllAnswers[index].answer = '';
  //   }
  //   setAllAnswers(copyAllAnswers);
  // };

  const onChangeAnswers = (e, index) => {
    const copy = [...allAnswers];
    copy[index].answer = getAnswer(e);
    setAllAnswers(copy);
  }

  return (
    <BrowserRouter>
      <h1 className="test-title">Test !!!</h1>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="start-wrapper">
              <NavLink to="/1">
                <input className="start-button" type="button" value="START" />
              </NavLink>
            </div>
          }
        />
        {questionsArray}
        <Route
          exact
          path="/result"
          element={
            <div className="result-wrapper">
              <h2 className="result-title">RIGHT ANSWERS</h2>
              <div className="result-count">{result}/8</div>
              <NavLink to="/">
                <input className="result-button" type="button" value="RESTART" onClick={getResult} />
              </NavLink>

              <NavLink to="/answers">
                <div className="allAnswers-wrapper">
                  <input className="answers-button" type="button" value="ANSWERS CHECK" />
                </div>
              </NavLink>
            </div>
          }
        />
        <Route
          exact
          path="/answers"
          element={
            <div>
              <AllAnswersList data={store.questions} quest={allAnswers} />
              {/* <button onClick={(index) => onChangeAnswers(index)}>посмотреть ответы</button> */}
            </div>
          }
        />
      </Routes >
    </BrowserRouter >
  );
};

export default Lesson103;
