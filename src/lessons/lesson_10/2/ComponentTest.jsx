import React, { useState, useRef } from "react";
import Lesson102 from "./Lesson102";

const ComponentTest = ({ item }) => {
  const [isValid, setIsValid] = useState(null);
  const inputRef = useRef(null);

  const borderColor =
    isValid === null
      ? "10px solid #666"
      : isValid
      ? "10px solid green"
      : "10px solid red";

  const style = {
    outline: borderColor,
    margin: "30px",
    padding: "30px",
  };

  const isSubmitted = typeof isValid === "boolean";

  const result = {
    display: isSubmitted ? "block" : "none",
  };

  const handleClick = () => {
    const inputValue = parseInt(inputRef.current.value);
    setIsValid(inputValue === item.right);
  };

  return (
    <div style={style}>
      <div>ЭТО: {item.question} </div>
      <div>
        {item.answers.map((answer, index) => (
          <div key={index}>
            {index + 1}. {answer}
          </div>
        ))}
      </div>
      <input disabled={isSubmitted} type="text" ref={inputRef} />
      <button disabled={isSubmitted} onClick={handleClick}>
          submit test
      </button>
      {isSubmitted && (
        <div style={result}>
          {isValid ? (
            <div>Вы ответили {inputRef.current.value},и это правильно!!!!!</div>
          ) : (
            <div>
              Вы ответили {inputRef.current.value},и это бред! Правильно было бы{item.right}!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComponentTest;
