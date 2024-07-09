import React from 'react';

const Circle = ({ value, onClick, isPlayer1Next }) => {
  let circleClass = "circle";
  if (value === 'X') {
    circleClass += " x-mark";
  } else if (value === 'O') {
    circleClass += " o-mark";
  }

  return (
    <button className={circleClass} onClick={onClick}>
      {value === 'X' ? 'X' : (value === 'O' ? '✔' : '')}
    </button>
  );
};

export default Circle;
