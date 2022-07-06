import React from 'react';
import Square from './Square';

const ROWS = 3;

const Board = ({ squares, onClick }) => {
  const sqauresSplitted = new Array(Math.ceil(squares.length / ROWS))
    .fill()
    .map((_, index) => squares.slice(index * ROWS, index * ROWS + ROWS))

  console.log(sqauresSplitted);
  return (
    <div className="board">
      {sqauresSplitted.map((squareRow, i) => (
        <div key={i} style={{display: 'flex'}}>
          {squareRow.map((rowElement, index) => (
            <Square key={index+100} value={rowElement}
              onClick={() => onClick(i * ROWS + index)} />
          ))}
        </div>
      ))}
    </div>
  )
};

export default Board
