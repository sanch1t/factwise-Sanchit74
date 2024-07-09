import React from 'react';
import Circle from './Circle';

const Board = ({ squares, onClick, isXNext }) => {
  const renderCircle = (i) => {
    return <Circle value={squares[i]} onClick={() => onClick(i)} isXNext={isXNext} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderCircle(0)}
        {renderCircle(1)}
        {renderCircle(2)}
      </div>
      <div className="board-row">
        {renderCircle(3)}
        {renderCircle(4)}
        {renderCircle(5)}
      </div>
      <div className="board-row">
        {renderCircle(6)}
        {renderCircle(7)}
        {renderCircle(8)}
      </div>
    </div>
  );
};

export default Board;
