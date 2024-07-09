import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [isPlayer1Next, setIsPlayer1Next] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = isPlayer1Next ? 'X' : 'O';
    setSquares(nextSquares);
    setIsPlayer1Next(!isPlayer1Next);
  };

  const handleReset = () => {
    setSquares(initialSquares);
    setIsPlayer1Next(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner === 'X' ? 'PLAYER 1 WON!' : 'PLAYER 2 WON!';
  } else if (!squares.includes(null)) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (isPlayer1Next ? 'Player 1 (X)' : 'Player 2 (O)');
  }

  return (
    <div className="game">
      <h1 className="game-title">TIC-TAC-TOE</h1>
      <div className="game-info">
        <div>{status}</div>
      </div>
      <div className="game-board">
        <Board squares={squares} onClick={(i) => handleClick(i)} isPlayer1Next={isPlayer1Next} />
      </div>
      <div className="game-info">
        <button className="reset-button" onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
