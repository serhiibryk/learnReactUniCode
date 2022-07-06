import React, { useState } from 'react';
import { calculateWinner } from '../Components/ComponetsLesson108/helper';
import Board from '../Components/ComponetsLesson108/Board';
import './index.css'

const Lesson108 = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    //return if won or occupied
    if (winner || squares[i]) return;
    //select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
    // console.log(calculateWinner([...historyPoint, squares][historyPoint.length]));
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (

        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>

      );
    });


  return (
    <>
      <h1>React tic tac toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner" + winner : "Next player" + xO}</h3>
      </div>
    </>
  );

}

export default Lesson108
